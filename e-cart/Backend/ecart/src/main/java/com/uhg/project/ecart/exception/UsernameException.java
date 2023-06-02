package com.uhg.project.ecart.exception;

import org.springframework.http.HttpStatus;

public class UsernameException {
	private final String message;
	private final Throwable throwable;
	private final HttpStatus httpstatus;
	
	public String getMessage() {
		return message;
	}

	public Throwable getThrowable() {
		return throwable;
	}

	public HttpStatus getHttpstatus() {
		return httpstatus;
	}

	public UsernameException(String message, Throwable throwable, HttpStatus httpstatus) {
		super();
		this.message = message;
		this.throwable = throwable;
		this.httpstatus = httpstatus;
	}
		
	
}
