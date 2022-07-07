package com.cts.beans;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class HouseDetails {
	
	@Id  
	@GeneratedValue(strategy = GenerationType.AUTO) 
	int houseId;
	private String state;
	private String city;
	private String locality;
	private int pincode;
	private String houseNumber;
	private int noOfRooms;
	private int rent;
	private String Status="Available";
	private int area;
	private String description;
	private String image_url;
	
	private String buyerFirstName;
	private String buyerLastName;
	private String buyerEmail;
	private String buyerPhone;
	
	
	
	@OneToOne
	@JoinColumn(name="userId")
	private UserRegistration userRegistration;
	
	
	
	
	public String getBuyerFirstName() {
		return buyerFirstName;
	}
	public void setBuyerFirstName(String buyerFirstName) {
		this.buyerFirstName = buyerFirstName;
	}
	public String getBuyerLastName() {
		return buyerLastName;
	}
	public void setBuyerLastName(String buyerLastName) {
		this.buyerLastName = buyerLastName;
	}
	public String getBuyerEmail() {
		return buyerEmail;
	}
	public void setBuyerEmail(String buyerEmail) {
		this.buyerEmail = buyerEmail;
	}
	public String getBuyerphone() {
		return buyerPhone;
	}
	public void setBuyerphone(String buyerphone) {
		this.buyerPhone = buyerphone;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getArea() {
		return area;
	}
	public void setArea(int area) {
		this.area = area;
	}
	public int getHouseId() {
		return houseId;
	}
	public void setHouseId(int houseId) {
		this.houseId = houseId;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getHouseNumber() {
		return houseNumber;
	}
	public void setHouseNumber(String houseNumber) {
		this.houseNumber = houseNumber;
	}
	public int getNoOfRooms() {
		return noOfRooms;
	}
	public void setNoOfRooms(int noOfRooms) {
		this.noOfRooms = noOfRooms;
	}
	public int getRent() {
		return rent;
	}
	public void setRent(int rent) {
		this.rent = rent;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	
	public UserRegistration getUserRegistration() {
		return userRegistration;
	}
	public void setUserRegistration(UserRegistration userRegistration) {
		this.userRegistration = userRegistration;
	}
	
	public HouseDetails() {
		super();
	}
	public String getImage_url() {
		return image_url;
	}
	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}
	
	public HouseDetails(int houseId, String state, String city, String locality, int pincode, String houseNumber,
			int noOfRooms, int rent, String status, UserRegistration userRegistration) {
		super();
		this.houseId = houseId;
		this.state = state;
		this.city = city;
		this.locality = locality;
		this.pincode = pincode;
		this.houseNumber = houseNumber;
		this.noOfRooms = noOfRooms;
		this.rent = rent;
		Status = status;
		this.userRegistration = userRegistration;
	}
	public HouseDetails(int houseId, String state, String city, String locality, int pincode, String houseNumber,
			int noOfRooms, int rent, String status, String image_url, UserRegistration userRegistration) {
		super();
		this.houseId = houseId;
		this.state = state;
		this.city = city;
		this.locality = locality;
		this.pincode = pincode;
		this.houseNumber = houseNumber;
		this.noOfRooms = noOfRooms;
		this.rent = rent;
		Status = status;
		this.image_url = image_url;
		this.userRegistration = userRegistration;
	}
	public HouseDetails(int houseId, String state, String city, String locality, int pincode, String houseNumber,
			int noOfRooms, int rent, String status, int area, String description, UserRegistration userRegistration) {
		super();
		this.houseId = houseId;
		this.state = state;
		this.city = city;
		this.locality = locality;
		this.pincode = pincode;
		this.houseNumber = houseNumber;
		this.noOfRooms = noOfRooms;
		this.rent = rent;
		Status = status;
		this.area = area;
		this.description = description;
		this.userRegistration = userRegistration;
	}
	
	
	
	
	
	
	
	

}










