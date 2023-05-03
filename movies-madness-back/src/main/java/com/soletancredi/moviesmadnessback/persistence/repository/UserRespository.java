package com.soletancredi.moviesmadnessback.persistence.repository;

import com.soletancredi.moviesmadnessback.persistence.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRespository extends MongoRepository<User, String> {
}
