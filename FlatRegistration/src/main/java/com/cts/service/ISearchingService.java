package com.cts.service;

import java.util.List;

import com.cts.beans.HouseDetails;
import com.cts.beans.Searching;
import com.cts.exception.HouseNotFoundException;

public interface ISearchingService {
	public List<HouseDetails> searchResult(Searching srch) throws HouseNotFoundException;
	//public List<HouseDetails> searchBookedFlats(int customerid);
	

}
