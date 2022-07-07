package com.cts.service;

import com.cts.beans.LoginUser;
import com.cts.beans.UserRegistration;

public interface ILoginService {
	public UserRegistration getLoginDetails(LoginUser log);
	public String getAuthorizationById(int id);

}
