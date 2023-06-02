package com.uhg.project.ecart.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.uhg.project.ecart.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findFirstByEmail(String email);
}
