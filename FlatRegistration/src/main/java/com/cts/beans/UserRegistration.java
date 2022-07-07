package com.cts.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserRegistration {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	int userId;
	private String firstName;
	private String lastName;
	private String email;
	private long phoneNo;
	private String password;
	private String role;
	private String adhaarNo;
	private String pancard;
	private String occupation;
	
	
	
	public UserRegistration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserRegistration(int userId, String firstName, String lastName, String email, long phoneNo, String password,
			String role, String adhaarNo, String pancard, String occupation) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNo = phoneNo;
		this.password = password;
		this.role = role;
		this.adhaarNo = adhaarNo;
		this.pancard = pancard;
		this.occupation = occupation;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getAdhaarNo() {
		return adhaarNo;
	}

	public void setAdhaarNo(String adhaarNo) {
		this.adhaarNo = adhaarNo;
	}

	public String getPancard() {
		return pancard;
	}

	public void setPancard(String pancard) {
		this.pancard = pancard;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserRegistration [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", phoneNo=" + phoneNo + ", password=" + password + ", role=" + role + ", adhaarNo="
				+ adhaarNo + ", pancard=" + pancard + ", occupation=" + occupation + "]";
	}
	
	

}
