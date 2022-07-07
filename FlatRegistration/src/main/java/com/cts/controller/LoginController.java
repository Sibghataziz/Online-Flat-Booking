package com.cts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.beans.LoginUser;
import com.cts.beans.UserRegistration;
import com.cts.service.ILoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins="http://localhost:3000")


public class LoginController {
	
	
	@Autowired
	ILoginService loginService;
	
	
	/**
	 * It will check whether the login credentials are present in database or not and give actions accordingly
	 * @param log
	 * @return
	 */
	
	@PostMapping
	public ResponseEntity<UserRegistration> loginUsingIdandPass(@RequestBody LoginUser log)
	{
		UserRegistration user= loginService.getLoginDetails(log);
		if(user!=null) {
			return new ResponseEntity<UserRegistration>(user, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<UserRegistration>(user, HttpStatus.NOT_FOUND);
		}
	}

}
