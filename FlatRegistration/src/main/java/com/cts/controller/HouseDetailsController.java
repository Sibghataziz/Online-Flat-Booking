package com.cts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cts.beans.HouseDetails;
import com.cts.beans.Searching;
import com.cts.exception.HouseNotFoundByOwnerIdException;
import com.cts.service.IHouseDetailsService;
import com.cts.service.FileUploadService;

@RestController
@RequestMapping("/house")
@CrossOrigin(origins="http://localhost:3000/")
public class HouseDetailsController {

	@Autowired
	IHouseDetailsService hservice;
	
	@Autowired
	FileUploadService uploadService;
	
 
	
	
	/**
	 * return all the house details from database 
	 * @return
	 */

	@GetMapping
	public List<HouseDetails> printAllHouse() {
		return hservice.getAllHouse();
	}

	
	/**
	 * return house details according to house id
	 * @param houseId
	 * @return
	 */
	
	@GetMapping("/{houseId}")
	public ResponseEntity<HouseDetails> getHouseDetails(@PathVariable int houseId) {
		HouseDetails h = hservice.findHouseById(houseId);
		if (h != null)
			return new ResponseEntity<HouseDetails>(h, HttpStatus.OK);
		else
			return new ResponseEntity<HouseDetails>(HttpStatus.NOT_FOUND);

	}
	
	
	/**
	 * return all houses of a particular owner via owner id
	 * @param ownerId
	 * @return
	 * @throws HouseNotFoundByOwnerIdException
	 */
	
	
	@GetMapping("/owner/{ownerId}")
	public ResponseEntity<List<HouseDetails>> getHouseDetailsByOwnerId(@PathVariable int ownerId) throws HouseNotFoundByOwnerIdException{
		List<HouseDetails>houseList= hservice.findHouseByOwnerId(ownerId);
		if(houseList!=null) {
			return new ResponseEntity<List<HouseDetails>>(houseList, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<List<HouseDetails>>(HttpStatus.OK);
		}
	}
	
	
/**
 * inserting house detail in the database for owner who logged in....
 * @param housed
 * @return
 */
	
	@PostMapping
	public ResponseEntity<List<HouseDetails>> saveHouseDetails(@RequestBody HouseDetails housed) {

		List<HouseDetails> hs = hservice.createHouse(housed);
		if (hs != null) {
			System.out.println("reached if");
			return new ResponseEntity<List<HouseDetails>>(hs, HttpStatus.OK);
		} else {
			System.out.println("reached else");
			return new ResponseEntity<List<HouseDetails>>(HttpStatus.NOT_FOUND);
		}
	}
	
	
//	@PostMapping
//	public ResponseEntity<HouseDetails> saveHouseDetails(@RequestBody HouseDetails housed) {
//		System.out.print("reached house");
//		HouseDetails hs = hservice.createHouse(housed);
//		if (hs != null) {
//			System.out.println("reached if");
//			return new ResponseEntity<HouseDetails>(hs, HttpStatus.OK);
//		} else {
//			System.out.println("reached else");
//			return new ResponseEntity<HouseDetails>(hs,HttpStatus.NOT_FOUND);
//		}
//	}
//	
	
	@PostMapping("/{houseid}")
	public ResponseEntity<String> insertImage(@RequestParam("file") MultipartFile file,@RequestParam("id") int id) {
		
		try {
			System.out.println("1 "+id);
			if(file==null) {
				System.out.println("1.1");
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Image must be present");
			}
			System.out.println("2");
			String type = file.getContentType();
			System.out.println(type);
			if(!type.equalsIgnoreCase("image/jpeg") && !type.equalsIgnoreCase("image/png")) {
				System.out.println("2.1");
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Image Format should be jpeg/png");
			}
			System.out.println("3");
			HouseDetails h = hservice.findHouseById(id);
			String url = "UserId"+h.getUserRegistration().getUserId()+"houseid"+id+file.getOriginalFilename();
			System.out.println(url);
			boolean f = uploadService.uploadFile(file,url);
//			System.out.println("4");
			if(f) {
				System.out.println("5");
				h.setImage_url(url);
				hservice.updateHouseDetails(h, id);
				return ResponseEntity.ok("File uploaded.");

			}
		}
		catch(Exception e) {
		e.printStackTrace();	
		}		
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Image Format should be jpeg/png");
		
		
	}
	
	@PostMapping("/sold/{houseid}")
	public ResponseEntity<String> bookFlat(@RequestParam("id") int id) {

		HouseDetails h = hservice.findHouseById(id);
		if(h.getStatus().equalsIgnoreCase("Booked")){
			h.setStatus("Sold");
			hservice.updateHouseDetails(h, id);
			return ResponseEntity.ok("House Sold");
		}
		else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("House already Sold");
		}
		
	}
	
	
	@PostMapping("/booking/{houseid}")
	public ResponseEntity<String> bookFlat(@RequestBody HouseDetails housed) {

		HouseDetails h = hservice.findHouseById(housed.getHouseId());
//		System.out.println(h.getStatus());
		if(h.getStatus().equalsIgnoreCase("Available") || h.getStatus().equalsIgnoreCase("Booked")){
			h.setStatus(housed.getStatus());
			h.setBuyerEmail(housed.getBuyerEmail());
			h.setBuyerFirstName(housed.getBuyerFirstName());
			h.setBuyerLastName(housed.getBuyerLastName());
			h.setBuyerphone(housed.getBuyerphone());
			hservice.updateHouseDetails(h, housed.getHouseId());
			return ResponseEntity.ok("House Booked");
		}
		else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("House already Booked");
		}
		
	}
	
	
	
	
/**
 * updating house details via house id
 * @param housed
 * @param houseid
 * @return
 */
	
	
	@PutMapping("/{houseid}")
	public ResponseEntity<HouseDetails> updateHouseDetails(@RequestBody HouseDetails housed, @PathVariable int houseid) {
		HouseDetails hd = hservice.updateHouseDetails(housed, houseid);
		if (hd != null)

			return new ResponseEntity<HouseDetails>(hd, HttpStatus.OK);
		else
			return new ResponseEntity<HouseDetails>(HttpStatus.NOT_FOUND);

	}

	
	/**
	 * delete house details using house id
	 * @param houseId
	 * @return
	 */
	
	@DeleteMapping("/{houseId}")
	public List<HouseDetails> deleteHouseDetails(@PathVariable int houseId) {
		return hservice.removeHouse(houseId);
	}

}
