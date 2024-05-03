package org.example.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;
@Data
public class PostImageDto {
    @NotNull
   private MultipartFile file;
}
