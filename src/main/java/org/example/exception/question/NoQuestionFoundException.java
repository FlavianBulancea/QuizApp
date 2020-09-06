package org.example.exception.question;

import org.example.exception.QuizAppException;

public class NoQuestionFoundException extends QuizAppException {

    public static final String MESSAGE = "No question found :(";

    public NoQuestionFoundException() {
        super(MESSAGE);
    }
}
