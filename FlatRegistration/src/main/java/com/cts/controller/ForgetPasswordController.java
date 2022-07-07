package com.cts.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.beans.ForgetPassword;
import com.cts.beans.UserRegistration;
import com.cts.service.IForgetPasswordService;

@RestController
@RequestMapping("/retreivePassword")
@CrossOrigin(origins="http://localhost:3000/")
public class ForgetPasswordController {
	
	@Autowired
	IForgetPasswordService service;
	
	
	@PostMapping()
	public ResponseEntity<UserRegistration> retreiveForgetPassword(@RequestBody ForgetPassword email){
		//HashMap<String,String> map = new HashMap<>();
		System.out.print(email+" request reached");
		UserRegistration retreivedPassword = service.getPassword(email);
		if(retreivedPassword != null){
			//map.put("password", retreivedPassword.getPassword());
			System.out.println("inside if"+ email);
			
			return new ResponseEntity<UserRegistration>(retreivedPassword,HttpStatus.OK);
		}else {
			System.out.println("inside else"+ email);
			return new ResponseEntity<UserRegistration>(HttpStatus.NOT_FOUND);
		}
	}

}
