package org.example.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.stream.Collectors;
import org.example.model.entity.Logger;
import org.example.service.LoggerService;

@Aspect
@Component
@Slf4j
@RequiredArgsConstructor
public class Myaspect {
    private final LoggerService loggerService;

    @Around(value = "@annotation(org.example.aspect.MyLogger)")
    public Object myLog(ProceedingJoinPoint joinPoint) throws Throwable {
        // Proceed with the intercepted method and get the result
        Object result = joinPoint.proceed();

        // Convert result to string based on its type
        String answer;
        if (result instanceof ResponseEntity) {
            // Convert ResponseEntity to String
            ResponseEntity<?> responseEntity = (ResponseEntity<?>) result;
            answer = responseEntity.toString();
        } else {
            // Convert other types directly to String
            answer = result != null ? result.toString() : "null";
        }

        // Get the request arguments as a string
        String request = Arrays.stream(joinPoint.getArgs())
                .map(Object::toString)
                .collect(Collectors.joining(","));

        // Log the request and response
        Logger logger = new Logger(null, request, answer, LocalDateTime.now());
        loggerService.log(logger);

        return result;  // Return the original result
    }

    @Before("execution(public void getNews())")
    public void News() {
        System.out.println("News is showed");
    }
}
