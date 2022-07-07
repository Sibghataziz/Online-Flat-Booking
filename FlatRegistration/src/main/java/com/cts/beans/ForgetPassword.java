package com.cts.beans;

public class ForgetPassword {
	private String email;

	public ForgetPassword() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ForgetPassword(String email) {
		super();
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "ForgetPassword [email=" + email + "]";
	}
	
	

}
