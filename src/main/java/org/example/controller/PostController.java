package org.example.controller;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import io.minio.errors.*;
import lombok.RequiredArgsConstructor;
import org.example.aspect.MyLogger;
import org.example.dto.PostDto;
import org.example.dto.PostResponseDto;
import org.example.payload.ResponseMessage;
import org.example.service.PostService;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@CrossOrigin("*")
@RequestMapping("home")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;
    @MyLogger
    @PostMapping("/post")  // Mapping for adding a post
    public ResponseEntity<ResponseMessage> addPost(@ModelAttribute PostDto postDto) throws IOException, ServerException, InsufficientDataException, ErrorResponseException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException, ChangeSetPersister.NotFoundException {
        postService.addPost(postDto);
        return ResponseEntity.ok(new ResponseMessage("Post added successfully"));
    }

    @GetMapping("/posts")
    @ResponseBody// Changed the mapping to /posts
    public List<Object> getAllPosts() throws IOException {
        return postService.getAllPosts();
    }
    @MyLogger
    @DeleteMapping("/post/{id}")
    public ResponseEntity<String> deletePost(@PathVariable Long id) {
        String result = postService.deletePost(id);
        return ResponseEntity.ok(result);
    }

}
