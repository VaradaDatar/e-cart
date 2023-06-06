package com.uhg.project.ecart.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.uhg.project.ecart.dto.AuthenticationDTO;
import com.uhg.project.ecart.dto.AuthenticationResponse;
import com.uhg.project.ecart.exception.UserNotFoundException;
import com.uhg.project.ecart.jwt.UserDetailsServiceImp;
import com.uhg.project.ecart.service.EmailService;
//import com.uhg.project.ecart.service.AuthService;
import com.uhg.project.ecart.util.JWTUtil;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class AuthenticationController {
	
	@Autowired
	private JWTUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UserDetailsServiceImp userDetailsService;
	
	@Autowired
	private EmailService emailService;
  
	
	@PostMapping("/authenticate")
	public AuthenticationResponse createAuthenticationToken(@RequestBody AuthenticationDTO authenticationDTO, HttpServletResponse response) throws BadCredentialsException, DisabledException,UsernameNotFoundException, IOException{
//		try {
//			Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationDTO.getEmail(),authenticationDTO.getPassword()));
//		}catch(UsernameNotFoundException e) {
//			throw new UserNotFoundException("Incorrect username or password");
//		}
		Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationDTO.getEmail(),authenticationDTO.getPassword()));
		
		if (auth == null) {
			throw new UserNotFoundException("Incorrect username or password");
		}
			
	
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationDTO.getEmail());
		final String jwt = jwtUtil.generateToken(userDetails.getUsername());
		return new AuthenticationResponse(jwt);
	}
	
}
