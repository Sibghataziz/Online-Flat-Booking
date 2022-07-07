package com.cts.exception;

public class ResourceNotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException() {
		super();
	}

	public ResourceNotFoundException( String args0) {
		super(args0);
	}

}
