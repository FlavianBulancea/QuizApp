package org.example.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HighScoreDto {

    private Long id;
    private Long score;
    private LocalDateTime dateTime;
    private Long user_id;
}
