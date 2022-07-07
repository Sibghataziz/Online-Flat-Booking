package com.cts.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.beans.HouseDetails;
import com.cts.beans.Searching;
import com.cts.beans.UserRegistration;
import com.cts.dao.HouseDetailsRepository;
import com.cts.dao.SearchingRepository;
import com.cts.dao.UserRepository;
import com.cts.exception.HouseNotFoundException;
@Service
public class SearchingService implements ISearchingService {

	@Autowired
	SearchingRepository repo;
	@Autowired
	UserRepository userRepository;
	@Autowired
	HouseDetailsRepository houseRepository;
	
	@Override
//	public List<HouseDetails> searchResult(Searching srch) {
//		// TODO Auto-generated method stub
//		List<HouseDetails> searchedResult=new ArrayList<HouseDetails>();
//		List<HouseDetails> hd=repo.findAll();
//		for(HouseDetails hde:hd)
//		{
//			
//			if((hde.getState().equalsIgnoreCase(srch.getState()) || hde.getCity().equalsIgnoreCase(srch.getCity()) || hde.getLocality().equalsIgnoreCase(srch.getLocality()) 
//				|| hde.getRent()<=srch.getBudget()) && !(hde.getStatus().equalsIgnoreCase("Booked")))
//			{
//				searchedResult.add(hde);
//			}
//		}
//		
//		return searchedResult;
//		
//	}
	
	public List<HouseDetails> searchResult(Searching srch) {
		// TODO Auto-generated method stub
		List<HouseDetails> searchedResult=new ArrayList<HouseDetails>();
		List<HouseDetails> hd=repo.findAll();
		List<HouseDetails> temp  = new ArrayList<HouseDetails>();
		for(HouseDetails hde:hd) {
			if(hde.getStatus().equalsIgnoreCase("Available") && hde.getRent()<=srch.getBudget()) {
				temp.add(hde);
			}
		}
		double empty=0;
		if(srch.getCity().equals("") && srch.getState().equals("") && srch.getLocality().equals("")) {
			empty=3.0;
		}
		else if(srch.getCity().equals("") && srch.getState().equals("")) {
			empty=2.1;
		}
		else if(srch.getCity().equals("") && srch.getLocality().equals("")) {
			empty=2.2;
		}
		else if(srch.getLocality().equals("") && srch.getState().equals("")) {
			empty=2.3;
		}
		else if(srch.getCity().equals("")) {
			empty=1.1;
		}
		else if(srch.getState().equals("")) {
			empty=1.2;
		}
		else if(srch.getLocality().equals("")) {
			empty=1.3;
		}
		for(HouseDetails hde:temp)
		{
			if(empty==3.0) {
				return temp;
			}
			
			else if(empty==2.1 && hde.getLocality().equalsIgnoreCase(srch.getLocality())) {
				searchedResult.add(hde);
			}
			
			else if(empty==2.2 && hde.getState().equalsIgnoreCase(srch.getState())) {
				searchedResult.add(hde);
			}
			else if(empty==2.3 && hde.getCity().equalsIgnoreCase(srch.getCity())) {
				searchedResult.add(hde);
			}
			else if(empty==1.1 && (hde.getState().equalsIgnoreCase(srch.getState()) && hde.getLocality().equalsIgnoreCase(srch.getLocality()))) {
				searchedResult.add(hde);
			}
			else if(empty==1.2 && (hde.getCity().equalsIgnoreCase(srch.getCity()) && hde.getLocality().equalsIgnoreCase(srch.getLocality()))) {
				searchedResult.add(hde);
			}
			else if(empty==1.3 && (hde.getState().equalsIgnoreCase(srch.getState()) && hde.getCity().equalsIgnoreCase(srch.getCity()))) {
				searchedResult.add(hde);
			}
			else if(empty==0 && (hde.getState().equalsIgnoreCase(srch.getState()) && hde.getCity().equalsIgnoreCase(srch.getCity()) && hde.getLocality().equalsIgnoreCase(srch.getLocality()))){
				searchedResult.add(hde);
			}
		}
		
		return searchedResult;
		
	}

//	@Override
//	public List<HouseDetails> searchBookedFlats(int customerid) {
//		List<UserRegistration> userDetails=userRepository.findAll();
//		for(UserRegistration user:userDetails) {
//			if(user.getUserId()==customerid) {
//				return null;
//			}
//		}
//		return null;
//	}

}
