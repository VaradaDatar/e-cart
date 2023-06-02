package com.uhg.project.ecart.service;

import com.uhg.project.ecart.dto.SignupDTO;
import com.uhg.project.ecart.dto.UserDTO;

public interface AuthService {

	UserDTO createUser(SignupDTO signupDTO);

}
