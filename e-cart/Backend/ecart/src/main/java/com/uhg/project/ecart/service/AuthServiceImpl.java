package com.uhg.project.ecart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.uhg.project.ecart.dto.SignupDTO;
import com.uhg.project.ecart.dto.UserDTO;
import com.uhg.project.ecart.entity.User;
import com.uhg.project.ecart.repository.UserRepository;

@Service
public class AuthServiceImpl implements AuthService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDTO createUser(SignupDTO signupDTO) {
		// TODO Auto-generated method stub
		User user = new User();
		user.setFirstName(signupDTO.getFirstName());
		user.setLastName(signupDTO.getLastName());
		user.setEmail(signupDTO.getEmail());
		user.setNumber(signupDTO.getNumber());
		user.setPassword(new BCryptPasswordEncoder().encode(signupDTO.getPassword()));
		user.setRole(signupDTO.getRole());
		User createUser=userRepository.save(user);
		UserDTO userDTO = new UserDTO();
		userDTO.setId(createUser.getId());
		userDTO.setFirstName(createUser.getFirstName());
		userDTO.setEmail(createUser.getEmail());
		userDTO.setLastName(createUser.getLastName());
		userDTO.setEmail(createUser.getEmail());
		userDTO.setNumber(createUser.getNumber());
//		userDTO.setPassword(createUser.getPassword());
		userDTO.setRole(createUser.getRole());
		return userDTO;
	}

	

}
