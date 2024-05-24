package org.example.service;

import io.minio.errors.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import org.example.dto.UserDto;
import org.example.dto.UserResponseDto;
import org.example.model.entity.Image;
import org.example.model.entity.Post;
import org.example.model.entity.User;
import org.example.repository.UserRepository;
import org.example.service.ImageService;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

// UserService.java
@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final ImageService imageService;
    private final PasswordEncoder passwordEncoder;

    public List<User> getAllUsers(){
        return repository.findAll();
    }

    public UserResponseDto getUserResponseById(Long id) throws IOException, ChangeSetPersister.NotFoundException {
        User user=repository.findById(id).orElseThrow(() -> new ChangeSetPersister.NotFoundException());
        Long userId=user.getId();
        String email=user.getEmail();
        String username=user.getUsername();
        String firstName=user.getFirstName();
        String lastName=user.getLastName();
        String role= user.getRoles().toString();
        String gender=user.getGender();
        String imageName = (user.getImage() != null) ? user.getImage().getName() : null; // Check if image is not null
        List<Post> postList=user.getPostList();
        UserResponseDto userResponseDto=new UserResponseDto(userId,email,username,firstName,gender,lastName,role,imageName,postList);
        return userResponseDto;
    }

    public User getUserById(Long id) throws ChangeSetPersister.NotFoundException {
        return repository.findById(id).orElseThrow(() -> new ChangeSetPersister.NotFoundException());
    }
    public User getUserByUsername(String username) throws ChangeSetPersister.NotFoundException {
        return repository.findByUsername(username).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

    }
    @Transactional
    @SneakyThrows
   public String addAvatar(MultipartFile file,Long id){
       User user=repository.findById(id).orElseThrow(() -> new ChangeSetPersister.NotFoundException());
        if (file!= null) {
            if (file.getSize() > 0 && !file.equals(user.getImage())) {
                if (user.getImage() != null) {
                    imageService.deleteImage(user.getImage());
                }
                Image image = imageService.getImageById(imageService.upload(file));
                user.setImage(image);
            }

        }
        repository.save(user);
        return user.getUsername();
   }
    public String addUserData(UserDto userDto,Long id) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException, ChangeSetPersister.NotFoundException {
        User user=repository.findById(id).orElseThrow(() -> new ChangeSetPersister.NotFoundException());
        if(!user.getUsername().equals(userDto.getUsername())&&userDto.getUsername()!=null){
            user.setUsername(userDto.getUsername());
        }
        if(!user.getEmail().equals(userDto.getEmail())&&userDto.getEmail()!=null){
            user.setEmail(userDto.getEmail());
        }
        if(userDto.getFirstName()!=null){
            user.setFirstName(userDto.getFirstName());
        }
        if(userDto.getLastName()!=null){
            user.setLastName(userDto.getLastName());
        }
        if(userDto.getPassword()!=null&&!userDto.getPassword().equals(user.getPassword())){
            user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        }
        if(userDto.getGender()!=null){
            user.setGender(userDto.getGender());
        }
        if (userDto.getAvatarFile() != null) {
            MultipartFile file = userDto.getAvatarFile();
            if (file.getSize() > 0 && !file.equals(user.getImage())) {
                if (user.getImage() != null) {
                    imageService.deleteImage(user.getImage());
                }
                Image image = imageService.getImageById(imageService.upload(file));
                user.setImage(image);
            }

        }
        repository.save(user);
        return "Added";

       }
}
