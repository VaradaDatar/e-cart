	package com.uhg.project.ecart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.uhg.project.ecart.dto.SignupDTO;
import com.uhg.project.ecart.dto.UserDTO;
import com.uhg.project.ecart.service.AuthService;
import com.uhg.project.ecart.service.EmailService;

@RestController
public class SignupController {

	@Autowired
	private AuthService authservice;
	
	@Autowired
	private EmailService emailService;
  
	
	@PostMapping("/signup")
	public ResponseEntity<?> signupUser(@RequestBody SignupDTO signupDTO){
		emailService.sendRegistrationSuccessEmail(signupDTO.getEmail(),signupDTO.getFirstName());
		UserDTO createdUser=authservice.createUser(signupDTO);
		if(createdUser==null) {
			return new ResponseEntity<>("User not created", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
	}
	

}
