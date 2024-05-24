package org.example.dto;

import lombok.Data;

import java.util.Date;

@Data
public class MessageDto {
    private String content;
    private Long sender;
    private Long recipient;
    private Date timestamp;
}
