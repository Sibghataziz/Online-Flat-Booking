package com.cts.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.beans.HouseDetails;
import com.cts.dao.HouseDetailsRepository;
import com.cts.exception.HouseNotFoundByOwnerIdException;
import com.cts.exception.HouseNotFoundException;

@Service
public class HouseDetailsService implements IHouseDetailsService {

	@Autowired
	HouseDetailsRepository repository;
	@Autowired
	ILoginService loginservice;

	@Override
	public List<HouseDetails> getAllHouse() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public List<HouseDetails> createHouse(HouseDetails housedDet) {
		// TODO Auto-generated method stub
		String role = loginservice.getAuthorizationById(housedDet.getUserRegistration().getUserId());
		if (role!=null && (role.equalsIgnoreCase("owner") || role.equalsIgnoreCase("both"))) {
			repository.saveAndFlush(housedDet);
			return repository.findAll();
		}
		return null;
	}
	
//	@Override
//	public HouseDetails createHouse(HouseDetails housedDet) {
//		// TODO Auto-generated method stub
//		System.out.println("reached Create");
//		String role = loginservice.getAuthorizationById(housedDet.getUserRegistration().getUserId());
//		System.out.println(role);
//		if (role!=null && (role.equalsIgnoreCase("owner") || role.equalsIgnoreCase("both"))) {
//			repository.saveAndFlush(housedDet);
//			return housedDet;
//		}
//		return null;
//	}

	@Override
	public List<HouseDetails> removeHouse(int houseId)throws HouseNotFoundException {
		// TODO Auto-generated method stub
		repository.deleteById(houseId);
		return repository.findAll();
	}

	@Override
	public HouseDetails findHouseById(int houseId) throws HouseNotFoundException {
		// TODO Auto-generated method stub

		Optional<HouseDetails> op = repository.findById(houseId);
		if (op.isPresent()) {
			return op.get();
		} else
			throw new HouseNotFoundException("House not found by this id" + houseId);

	}

	@Override
	public HouseDetails updateHouseDetails(HouseDetails housed, int houseid) {
		//System.out.println(loginservice.getAuthorizationById(housed.getUserRegistration().getUserId()));
		String role = loginservice.getAuthorizationById(housed.getUserRegistration().getUserId());
		if (role.equalsIgnoreCase("owner") || role.equalsIgnoreCase("both") ) {

			return repository.findById(houseid).map(houseDetails -> {
				houseDetails.setState(housed.getState());
				houseDetails.setCity(housed.getCity());
				houseDetails.setLocality(housed.getLocality());
				houseDetails.setPincode(housed.getPincode());
				houseDetails.setHouseNumber(housed.getHouseNumber());
				houseDetails.setNoOfRooms(housed.getNoOfRooms());
				houseDetails.setRent(housed.getRent());
				houseDetails.setStatus(housed.getStatus());
				houseDetails.setUserRegistration(housed.getUserRegistration());
				return repository.save(houseDetails);
			}).orElseGet(() -> {
				housed.setHouseId(houseid);
				return repository.save(housed);
			});
		}
		return null;
	}

	@Override
	public List<HouseDetails> findHouseByOwnerId(int ownerId) throws 
	 HouseNotFoundByOwnerIdException {
		List<HouseDetails> hresult=new ArrayList<>();
		List<HouseDetails> houseDetails=repository.findAll();
		for(HouseDetails hd:houseDetails) {
			if(hd.getUserRegistration().getUserId()==ownerId) {
				hresult.add(hd);
			}
		}
		if(hresult.isEmpty()) {
			throw new HouseNotFoundByOwnerIdException("House not found by this id" + ownerId);
		}
		return hresult;
	}

}
