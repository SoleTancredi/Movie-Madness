package com.soletancredi.moviesmadnessback.rest.dto;

import java.time.LocalDateTime;
import java.util.List;

/*
    record -> classes that are mainly used for transporting data
    from one place to another within an application,
    provides a number of useful features such as
    constructors, getters, setters, among others, and the possibility
    to define additional methods that do not mutate the state of the object.
 */
public record MovieDto(String imdbId, String title, String director, String year, String poster,
                       List<CommentDto> comments) {
    public record CommentDto(String username, String avatar, String text, LocalDateTime timestamp) {
    }
}
