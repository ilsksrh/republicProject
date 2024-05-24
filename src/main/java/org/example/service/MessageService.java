package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.dto.MessageDto;
import org.example.model.entity.Message;
import org.example.model.entity.User;
import org.example.repository.MessageRepository;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final UserService userService;
    private final MessageRepository repository;
    public void sendMessage(MessageDto dto) throws ChangeSetPersister.NotFoundException {
        Message message=new Message();
        message.setContent(dto.getContent());
        message.setSender(userService.getUserById(dto.getSender()));
        message.setRecipient(userService.getUserById(dto.getRecipient()));
        message.setTimestamp(dto.getTimestamp());
        repository.save(message);
    }
}
