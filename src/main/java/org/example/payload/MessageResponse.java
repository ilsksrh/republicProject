package org.example.payload;

import org.springframework.http.HttpStatus;

public class MessageResponse {
    private String message;
    public MessageResponse(String message, HttpStatus ok) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
