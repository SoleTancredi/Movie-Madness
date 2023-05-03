package com.soletancredi.moviesmadnessback.rest;

import com.soletancredi.moviesmadnessback.persistence.model.User;
import com.soletancredi.moviesmadnessback.rest.dto.UserRequest;
import com.soletancredi.moviesmadnessback.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

import static com.soletancredi.moviesmadnessback.config.SwaggerConfig.BEARER_KEY_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/me")
    public User getUser(Principal principal) {
        return userService.validateAndGetUser(principal.getName());
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PostMapping("/me")
    public User saveUser(@Valid @RequestBody UserRequest updateUserRequest, Principal principal) {
        Optional<User> userOptional = userService.getUser(principal.getName());
        User user = userOptional.orElseGet(() -> new User(principal.getName()));
        user.setAvatar(updateUserRequest.getAvatar());
        return userService.saveUser(user);
    }
}
