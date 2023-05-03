package com.soletancredi.moviesmadnessback.service;

import com.soletancredi.moviesmadnessback.persistence.model.User;
import com.soletancredi.moviesmadnessback.persistence.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User validateAndGetUser(String username) {
        return getUser(username).orElseThrow();
    }

    @Override
    public Optional<User> getUser(String username) {
        return userRepository.findById(username);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
