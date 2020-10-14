package org.example.exception.User;

import org.example.exception.QuizAppException;

public class NoUserFoundException extends QuizAppException {

    public static final String MESSAGE = "No user found :(";

    public NoUserFoundException() {
        super(MESSAGE);
    }
}
