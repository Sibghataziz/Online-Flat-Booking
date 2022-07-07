package com.cts.service;

import com.cts.beans.ForgetPassword;
import com.cts.beans.UserRegistration;

public interface IForgetPasswordService {
	public UserRegistration getPassword(ForgetPassword email);

}
