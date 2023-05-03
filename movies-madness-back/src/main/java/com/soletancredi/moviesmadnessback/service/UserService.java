package com.soletancredi.moviesmadnessback.service;

import com.soletancredi.moviesmadnessback.persistence.model.User;

import java.util.Optional;

public interface UserService {
    User validateAndGetUser(String username);

    Optional<User> getUser(String username);

    User saveUser(User user);
}
