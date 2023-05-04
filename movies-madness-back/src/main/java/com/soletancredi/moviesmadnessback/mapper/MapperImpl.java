package com.soletancredi.moviesmadnessback.mapper;

import com.soletancredi.moviesmadnessback.persistence.model.Movie;
import com.soletancredi.moviesmadnessback.rest.dto.CreateMovieRequest;
import com.soletancredi.moviesmadnessback.rest.dto.MovieDto;
import com.soletancredi.moviesmadnessback.rest.dto.UpdateMovieRequest;
import org.springframework.stereotype.Component;

@Component
public class MapperImpl extends MovieMapper{
    @Override
    public Movie toMovie(CreateMovieRequest createMovieRequest) {
        return null;
    }

    @Override
    public void updateMovieFromDto(UpdateMovieRequest updateMovieRequest, Movie movie) {

    }

    @Override
    public MovieDto toMovieDto(Movie movie) {
        return null;
    }

    @Override
    public MovieDto.CommentDto toMovieDtoCommentDto(Movie.Comment comment) {
        return null;
    }
}
