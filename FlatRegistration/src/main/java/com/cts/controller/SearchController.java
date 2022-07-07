package com.cts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.beans.HouseDetails;
import com.cts.beans.Searching;
import com.cts.beans.UserRegistration;
import com.cts.service.ISearchingService;

@RestController
@RequestMapping("/searching")
@CrossOrigin(origins="http://localhost:3000/")
public class SearchController {
	
	@Autowired
	ISearchingService service;
	
	/**
	 * It will give a list of searched result from the database of available flats in area according to state city locality
	 *  and budget
	 * @param srch
	 * @return
	 */
	
	@PostMapping
	public ResponseEntity<List<HouseDetails>> fetchAllHouses(@RequestBody Searching srch)
	{
	
		System.out.println("Reached Searching");
		System.out.println(srch.toString());
		List<HouseDetails> o=service.searchResult(srch);
		if(o!= null) {
			System.out.println("reached searching if");
			System.out.println(o);
			
			 return new ResponseEntity<List<HouseDetails>> (o,HttpStatus.OK);
		 }else {
			 System.out.println("reached searching else");
			 System.out.println(o);
			 return new ResponseEntity<List<HouseDetails>> (o,HttpStatus.NOT_FOUND);
		 }
		
	}
	
	

}
