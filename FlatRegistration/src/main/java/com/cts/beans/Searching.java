package com.cts.beans;

public class Searching {
	private String state;
	private String city;
	private String locality;
	private double budget;
	
	
	public Searching() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Searching(String state, String city, String locality,double budget) {
		super();
		this.state = state;
		this.city = city;
		this.locality = locality;
		this.budget=budget;
	}
	
	public double getBudget() {
		return budget;
	}
	public void setBudget(double budget) {
		this.budget = budget;
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
	@Override
	public String toString() {
		return "Searching [state=" + state + ", city=" + city + ", locality=" + locality + ", budget=" + budget + "]";
	}
	
	

}
