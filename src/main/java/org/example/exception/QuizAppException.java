package org.example.exception;

public class QuizAppException extends Exception{

    private static final String MESSAGE = "Generic Exception !\nSomething went wrong :(";

    public QuizAppException() {
        super(MESSAGE);
    }

    public QuizAppException(String message) {
        super(message);
    }
}
