package org.example.exception.highScore;

import org.example.exception.QuizAppException;

public class NoNameInsertedException extends QuizAppException {

    public static final String MESSAGE = "No name inserted :(";

    public NoNameInsertedException() {
        super(MESSAGE);
    }
}
