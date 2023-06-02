package com.uhg.project.ecart.controller;

//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomePageController {
	
	@RequestMapping("/hello")
	public String hello() {
		return "Hello World";
	}
}
