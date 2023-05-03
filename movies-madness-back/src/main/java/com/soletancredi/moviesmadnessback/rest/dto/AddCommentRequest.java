package com.soletancredi.moviesmadnessback.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AddCommentRequest {
    //@Schema is used to provide an example of the expected value
    //for a property of the data model.
    @Schema(example = "Very good!")
    @NotBlank
    private String text;
}
