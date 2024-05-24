package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.service.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/image/{fileName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@PathVariable String fileName) throws IOException {
        byte[] imageBytes = imageService.getImage(fileName);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
    }
}
