package com.soletancredi.moviesmadnessback.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/*
    if the web application is looking for a movie in the database
    using the imdbId and does not find it, it will return a 404 error
    to the client instead of a generic server error.
*/
@ResponseStatus(HttpStatus.NOT_FOUND)
public class MovieNotFoundException {
    public MovieNotFoundException(String imdbId) {
        super();}
}
