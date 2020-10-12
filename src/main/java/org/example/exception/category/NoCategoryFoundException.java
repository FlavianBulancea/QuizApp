package org.example.exception.category;

import org.example.exception.QuizAppException;

public class NoCategoryFoundException extends QuizAppException {

    public static final String MESSAGE = "No category found :(";

    public NoCategoryFoundException() {
        super(MESSAGE);
    }
}
