package org.example.controller;

import io.minio.errors.*;
import lombok.AllArgsConstructor;
import org.example.dto.*;
import org.example.model.entity.*;
import org.example.payload.ResponseMessage;
import org.example.service.*;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping("home")
public class HomeController {
    private final UserService userService;
    private final AnimalService animalService;
    private final ShelterService shelterService;
    private final PostService postService;
    private final PostLikeService postLikeService;
    private final PostCommentService postCommentService;
    private final LostPetService lostPetService;
    private final LostPetLikeService lostPetLikeService;
    private final LostPetCommentService lostPetCommentService;
    private final NewsService newsService;
    private final NewsLikeService newsLikeService;
    private final NewsCommentService newsCommentService;
//    private final WorkTimeService workTimeService;


    @GetMapping("/user")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/user/{userId}")
    public User getUser(@PathVariable Long userId) throws IOException, ChangeSetPersister.NotFoundException {
        return userService.getUserById(userId);
    }
    @GetMapping("/users/{username}")
    public User getUserByUsername(@PathVariable String username) throws IOException, ChangeSetPersister.NotFoundException {
        return userService.getUserByUsername(username);
    }
    @PutMapping("/user/{id}")
    @ResponseBody
    public ResponseEntity<ResponseMessage> addUser(@ModelAttribute UserDto userDto, @PathVariable Long id) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException, ChangeSetPersister.NotFoundException {
        userService.addUserData(userDto,id);
        return ResponseEntity.ok(new ResponseMessage("User added successfully"));
    }

    @PutMapping("/user/avatar/{id}")
    public ResponseEntity<ResponseMessage> addAvatar(@PathVariable Long id, @RequestParam("file") MultipartFile file) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException, ChangeSetPersister.NotFoundException {
        userService.addAvatar(file,id);
        return ResponseEntity.ok(new ResponseMessage("User added successfully"));
    }


    @GetMapping("/lost")
    public List<LostPet> getAllLostPets(){
        return lostPetService.getAllLostPets();
    }
    @PostMapping("/lost")
    public String addLostPet(@RequestBody LostPetDto lostPetDto){
        return lostPetService.addLostPet(lostPetDto);
    }

    @GetMapping("/news")
    public List<News> getAllNews(){
        return newsService.getAllNews();
    }
    @PostMapping("/news")
    public String addNews(@RequestBody NewsDto newsDto){
        return newsService.addNews(newsDto);
    }

    @GetMapping("/animal")
    public List<Animal> getAllAnimals(){
        return animalService.getAllAnimals();
    }
    @PostMapping("/animal")
    public String addAnimal(@RequestBody AnimalDto animalDto) throws IOException, ChangeSetPersister.NotFoundException {
        return animalService.addAnimal(animalDto);
    }

    @GetMapping("/shelter")
    public List<Shelter> getAllShelters(){
        return shelterService.getAllShelters();
    }
    @PostMapping("/shelter")
    public String addShelter(@RequestBody ShelterDto shelterDto){
        return shelterService.addShelter(shelterDto);
    }

//    @PostMapping("/worktime1")
//    public String addWorkTime1(@RequestBody WorkTimeDto workTimeDto){
//        return workTimeService.addWorkTime1(workTimeDto);
//    }
//    @PostMapping("/worktime2")
//    public String addWorkTime2(@RequestBody WorkTimeDto workTimeDto){
//        return workTimeService.addWorkTime2(workTimeDto);
//    }
//    @PostMapping("/worktime3")
//    public String addWorkTime3(@RequestBody WorkTimeDto workTimeDto){
//        return workTimeService.addWorkTime3(workTimeDto);
//    }
//    @PostMapping("/worktime4")
//    public String addWorkTime4(@RequestBody WorkTimeDto workTimeDto){
//        return workTimeService.addWorkTime4(workTimeDto);
//    }
//    @PostMapping("/worktime5")
//    public String addWorkTime5(@RequestBody WorkTimeDto workTimeDto){
//        return workTimeService.addWorkTime5(workTimeDto);
//    }
//    @PostMapping("/worktime6")
//    public String addWorkTime6(@RequestBody WorkTimeDto workTimeDto){
//        return workTimeService.addWorkTime6(workTimeDto);
//    }
//    @PostMapping("/worktime7")
//    public String addWorkTime7(@RequestBody WorkTimeDto workTimeDto){
//        return workTimeService.addWorkTime7(workTimeDto);
//    }
}
