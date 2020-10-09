package org.example.exception.answer;

import org.example.exception.QuizAppException;

public class NoAnswerFoundException extends QuizAppException {

    public static final String MESSAGE = "No answer found :(";

    public NoAnswerFoundException() {
        super(MESSAGE);
    }
}
