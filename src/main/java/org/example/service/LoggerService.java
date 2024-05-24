package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.model.entity.Logger;
import org.example.repository.LoggerRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoggerService {
    private final LoggerRepository loggerRepository;
    public Logger log(Logger log){
        return loggerRepository.save(log);
    }
}
