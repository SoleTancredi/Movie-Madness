package com.soletancredi.moviesmadnessback.mapper;

import com.soletancredi.moviesmadnessback.persistence.model.Movie;
import com.soletancredi.moviesmadnessback.rest.dto.CreateMovieRequest;
import com.soletancredi.moviesmadnessback.rest.dto.MovieDto;
import com.soletancredi.moviesmadnessback.rest.dto.UpdateMovieRequest;
import com.soletancredi.moviesmadnessback.service.UserService;
import org.mapstruct.*;
import org.springframework.beans.factory.annotation.Autowired;


@Mapper(
        componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        uses = UserService.class
)
public abstract class MovieMapper {
    @Autowired
    protected UserService userService;

    @Mapping(target = "comments", ignore = true)
    public abstract Movie toMovie(CreateMovieRequest createMovieRequest);

    @Mapping(target = "imdbId", ignore = true)
    @Mapping(target = "comments", ignore = true)
    public abstract void updateMovieFromDto(UpdateMovieRequest updateMovieRequest, @MappingTarget Movie movie);

    public abstract MovieDto toMovieDto(Movie movie);

    @Mapping(
            target = "avatar",
            expression = "java( userService.getUser(comment.getUsername()).isPresent() ? userService.getUser(comment.getUsername()).get().getAvatar() : comment.getUsername() )"
    )
    public abstract MovieDto.CommentDto toMovieDtoCommentDto(Movie.Comment comment);
}
