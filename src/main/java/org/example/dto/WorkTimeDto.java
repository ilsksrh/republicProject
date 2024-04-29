package org.example.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkTimeDto {
    private Long id;
    private int day;
    private boolean status;
    private String timeFrom;
    private String timeEnd;
}

