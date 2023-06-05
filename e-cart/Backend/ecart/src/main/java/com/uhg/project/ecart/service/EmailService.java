package com.uhg.project.ecart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	 @Autowired
	    private JavaMailSenderImpl javaMailSender;

	    public void sendRegistrationSuccessEmail(String to, String name) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(to);
	        message.setFrom("vinutajainapur99@gmail.com");
	        message.setSubject("Registration Successful");
	        message.setText("Dear " + name + ",\n\n" + 
	        "welcome to our E-Cart Application  system"+
	                "Congratulations! You have successfully registered.\n\n" +
	                "Best regards,\n" +
	                "Your E-cart Team");
	        javaMailSender.send(message);
	    }

		

}
