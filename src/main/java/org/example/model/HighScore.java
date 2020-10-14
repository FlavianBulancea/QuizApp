package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class HighScore {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long score;

    private Date date;

    @ManyToOne
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "fk_high_score_user"))
    private User user;

}
