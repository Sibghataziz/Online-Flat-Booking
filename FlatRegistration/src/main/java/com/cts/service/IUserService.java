package com.cts.service;

import java.util.List;

import com.cts.beans.UserRegistration;
import com.cts.exception.ResourceNotFoundException;

public interface IUserService {

	public List<UserRegistration> getAllOwner();
	public UserRegistration createOwner(UserRegistration ownerReg);
	public boolean removeOwner(int ownerId);

	public UserRegistration findOwnerById(int OwnerId) throws ResourceNotFoundException;
	public UserRegistration updateOwner(UserRegistration owner, int ownerid);
	
	public boolean checkUserRegistration(UserRegistration userReg);
}
