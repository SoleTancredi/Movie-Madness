package com.soletancredi.moviesmadnessback.persistence.repository;

import com.soletancredi.moviesmadnessback.persistence.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MovieRepository extends MongoRepository<Movie, String> {
}
