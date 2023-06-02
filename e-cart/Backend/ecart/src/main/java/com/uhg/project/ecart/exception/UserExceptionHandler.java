package com.uhg.project.ecart.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class UserExceptionHandler {
	@ExceptionHandler(value= {UsernameNotFoundException.class})
	public ResponseEntity<?> handleUsernameNotFoundException(UserNotFoundException e){
		UsernameException errorDetails = new UsernameException(e.getMessage(), e.getCause(), HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	}
}
