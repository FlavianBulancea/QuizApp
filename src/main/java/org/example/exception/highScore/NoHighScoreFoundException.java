package org.example.exception.highScore;

import org.example.exception.QuizAppException;

public class NoHighScoreFoundException extends QuizAppException {

    public static final String MESSAGE = "No highscore found :(";

    public NoHighScoreFoundException() {
        super(MESSAGE);
    }
}
