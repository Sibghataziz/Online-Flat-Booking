package com.cts.service;
import java.util.List;

import com.cts.beans.HouseDetails;
import com.cts.exception.HouseNotFoundByOwnerIdException;
import com.cts.exception.HouseNotFoundException;

public interface IHouseDetailsService {

	public List<HouseDetails> getAllHouse();
	public HouseDetails findHouseById(int houseId) throws HouseNotFoundException;
	public List<HouseDetails> findHouseByOwnerId(int ownerId) throws HouseNotFoundByOwnerIdException;
	public List<HouseDetails> createHouse(HouseDetails housedDet);
//	public HouseDetails createHouse(HouseDetails housedDet);
	public List<HouseDetails> removeHouse(int houseId) throws HouseNotFoundException;
	public HouseDetails updateHouseDetails(HouseDetails housed, int houseid);

}
