package com.cts.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.beans.UserRegistration;
import com.cts.dao.UserRepository;
import com.cts.exception.HouseNotFoundException;
import com.cts.exception.ResourceNotFoundException;

@Service
public class UserService implements IUserService {

	@Autowired
	UserRepository repository;

	@Override
	public List<UserRegistration> getAllOwner() {
		return repository.findAll();
	}

	@Override
	public UserRegistration createOwner(UserRegistration ownerReg) {
		System.out.println(ownerReg.getEmail()+" Inside create before");
		repository.saveAndFlush(ownerReg);
		System.out.println(ownerReg.getEmail()+" Inside create after");
		Optional<UserRegistration>op= repository.findById(ownerReg.getUserId());
		System.out.println(ownerReg.getEmail()+" Inside create search");
		if(op.isPresent()) {
			System.out.println(ownerReg.getEmail()+" Inside create search got");
			return op.get();
		}
		System.out.println(ownerReg.getEmail()+" Inside create search didn't get");
		return null;
	}

	@Override
	public boolean removeOwner(int ownerId) {
		if (ownerId !=0) {
			repository.deleteById(ownerId);
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public UserRegistration findOwnerById(int ownerId) {
		Optional<UserRegistration> op = repository.findById(ownerId);

		if (op.isPresent()) {
			return op.get();
		} else {
			throw new ResourceNotFoundException("Owner not found by this id" + ownerId);
		}
	}

	@Override
	public UserRegistration updateOwner(UserRegistration owner, int ownerid) {
		return repository.findById(ownerid).map(ownerDetails -> {
			
			
			ownerDetails.setFirstName(owner.getFirstName());
			ownerDetails.setLastName(owner.getLastName());
			ownerDetails.setEmail(owner.getEmail());
			ownerDetails.setAdhaarNo(owner.getAdhaarNo());
			ownerDetails.setRole(owner.getRole());
			ownerDetails.setOccupation(owner.getOccupation());
			ownerDetails.setPhoneNo(owner.getPhoneNo());
			ownerDetails.setPassword(owner.getPassword());
			return repository.save(ownerDetails);
		}).orElseGet(() -> {
			owner.setUserId(ownerid);
			return repository.save(owner);
		});
		
//		return repository.saveAndFlush(owner);
	}

	@Override
	public boolean checkUserRegistration(UserRegistration userReg) {  //logic for checking if user/owner already exists or not... to be implemented 
		// TODO Auto-generated method stub
		List<UserRegistration> users=repository.findAll();
		for(UserRegistration u:users)
		{
			if(u.getAdhaarNo().equalsIgnoreCase(userReg.getAdhaarNo()) || u.getPancard().equalsIgnoreCase(userReg.getPancard()) || u.getPhoneNo()==userReg.getPhoneNo())
				return false;
		}
		return true;
	}

}
