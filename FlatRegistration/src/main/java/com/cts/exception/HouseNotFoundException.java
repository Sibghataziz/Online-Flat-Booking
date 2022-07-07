package com.cts.exception;

public class HouseNotFoundException extends RuntimeException {

private static final long serialVersionUID = 1L;
	
	public HouseNotFoundException() {
		super();
	}

	public HouseNotFoundException( String args0) {
		super(args0);
	}
}
