package com.cts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.beans.LoginUser;
import com.cts.beans.UserRegistration;
import com.cts.dao.LoginRepository;
@Service
public class LoginService implements ILoginService {

	@Autowired
	LoginRepository repo;
	
	@Override
	public UserRegistration getLoginDetails(LoginUser log) {
		// TODO Auto-generated method stub
		List<UserRegistration> ur=repo.findAll();
		for(UserRegistration u:ur)
		{
			if(u.getEmail().equals(log.getEmail()) && u.getPassword().equals(log.getPassword()))
			{
			
				return u;
				
			}
		}
		return null;
	}

	@Override
	public String getAuthorizationById(int id) {
		// TODO Auto-generated method stub
		System.out.print(id);
		List<UserRegistration> ur=repo.findAll();
	
		for(UserRegistration u:ur)
		{
			if(u.getUserId()==id)
			{
				
				if(u.getRole().equalsIgnoreCase("Customer"))
					return "customer";
				else if(u.getRole().equalsIgnoreCase("owner"))
					return "owner";
				else if(u.getRole().equalsIgnoreCase("both"))
					return "both";
				
			}
			
		}
		return null;
	
	}

}
