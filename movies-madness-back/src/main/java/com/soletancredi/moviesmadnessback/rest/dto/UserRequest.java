package com.soletancredi.moviesmadnessback.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class UserRequest {
    @Schema(example = "avatar")
    private String avatar;
}
