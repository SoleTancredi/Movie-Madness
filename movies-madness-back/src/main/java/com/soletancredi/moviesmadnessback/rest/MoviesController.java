package com.soletancredi.moviesmadnessback.rest;

import com.soletancredi.moviesmadnessback.mapper.MapperImpl;
import com.soletancredi.moviesmadnessback.mapper.MovieMapper;
import com.soletancredi.moviesmadnessback.persistence.model.Movie;
import com.soletancredi.moviesmadnessback.rest.dto.AddCommentRequest;
import com.soletancredi.moviesmadnessback.rest.dto.CreateMovieRequest;
import com.soletancredi.moviesmadnessback.rest.dto.MovieDto;
import com.soletancredi.moviesmadnessback.rest.dto.UpdateMovieRequest;
import com.soletancredi.moviesmadnessback.service.MovieService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

import static com.soletancredi.moviesmadnessback.config.SwaggerConfig.BEARER_KEY_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/movies")
public class MoviesController {
    private final MovieService movieService;

    private final MapperImpl movieMapper;

    @GetMapping
    public List<MovieDto> getMovies() {
        return movieService.getMovies().stream().map(movieMapper::toMovieDto).toList();
    }

    @GetMapping("/{imdbId}")
    public MovieDto getMovie(@PathVariable String imdbId) {
        Movie movie = movieService.validateAndGetMovie(imdbId);
        return movieMapper.toMovieDto(movie);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public MovieDto createMovie(@Valid @RequestBody CreateMovieRequest createMovieRequest) {
        Movie movie = movieMapper.toMovie(createMovieRequest);
        movie = movieService.saveMovie(movie);
        return movieMapper.toMovieDto(movie);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PutMapping("/{imdbId}")
    public MovieDto updateMovie(@PathVariable String imdbId, @Valid @RequestBody UpdateMovieRequest updateMovieRequest) {
        Movie movie = movieService.validateAndGetMovie(imdbId);
        movieMapper.updateMovieFromDto(updateMovieRequest, movie);
        movie = movieService.saveMovie(movie);
        return movieMapper.toMovieDto(movie);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @DeleteMapping("/{imdbId}")
    public MovieDto deleteMovie(@PathVariable String imdbId) {
        Movie movie = movieService.validateAndGetMovie(imdbId);
        movieService.deleteMovie(movie);
        return movieMapper.toMovieDto(movie);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/{imdbId}/comments")
    public MovieDto addMovieComment(@PathVariable String imdbId, @Valid @RequestBody AddCommentRequest addCommentRequest, Principal principal) {
        Movie movie = movieService.validateAndGetMovie(imdbId);
        Movie.Comment comment = new Movie.Comment(principal.getName(), addCommentRequest.getText(), LocalDateTime.now());
        movie.getComments().add(0, comment);
        movie = movieService.saveMovie(movie);
        return movieMapper.toMovieDto(movie);
    }

}
