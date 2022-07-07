package com.cts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.beans.ForgetPassword;
import com.cts.beans.UserRegistration;
import com.cts.dao.ForgetPasswordRepository;

@Service
public class ForgetPasswordService implements IForgetPasswordService{
	
	@Autowired
	ForgetPasswordRepository repository;

	@Override
	public UserRegistration getPassword(ForgetPassword emailBody) {
		// TODO Auto-generated method stub
		List<UserRegistration> userDetails=repository.findAll();
		for (UserRegistration user:userDetails) {
			if(user.getEmail().equalsIgnoreCase(emailBody.getEmail())) {
				return user;
			}
		}
		return null;
	}
	

}
