package com.soletancredi.moviesmadnessback.persistence.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "user")
public class User {
    @Id
    private String username;
    private String avatar;

    public User(String username) {
        this.username = username;
    }
}
