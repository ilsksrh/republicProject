package org.example.controller;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import io.minio.errors.*;
import lombok.RequiredArgsConstructor;
import org.example.dto.PostDto;
import org.example.service.PostService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@CrossOrigin("*")
@RequestMapping("home")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;
//    @PostMapping("/upload")
//    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
//        postImageService.upload(file);
//        return ResponseEntity.ok().body(new ResponseMessage("Successfully uploaded image"));
//    }
@PostMapping("/post")
public String addPost (@ModelAttribute PostDto postDto) throws IOException, ServerException, InsufficientDataException, ErrorResponseException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
    return postService.addPost(postDto);
}
    @GetMapping("/post")
    public List<Object> getAllPosts(){
        return postService.getAllPosts();
    }
}