package com.cts.exception;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import com.cts.beans.ApiErrors;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	 //static Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	 
	@Override
	protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("Request method not supported");
		ApiErrors errors = new ApiErrors(message, details, status, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(status).body(errors);
	}

	@Override
	protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("Media not supported");
		details.add(ex.getMessage());
		ApiErrors errors = new ApiErrors(message, details, status, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(status).body(errors);
	}

	@Override
	protected ResponseEntity<Object> handleMissingPathVariable(MissingPathVariableException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("Path Variable is missing");
		ApiErrors errors = new ApiErrors(message, details, status, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(status).body(errors);
	}

	@Override
	protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("Request Param is missing");
		ApiErrors errors = new ApiErrors(message, details, status, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(status).body(errors);
	}

	@Override
	protected ResponseEntity<Object> handleTypeMismatch(TypeMismatchException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("Mismatch of type");
		ApiErrors errors = new ApiErrors(message, details, status, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(status).body(errors);
	}

	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("Request body is not readable");
		ApiErrors errors = new ApiErrors(message, details, status, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(status).body(errors);
	}

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<Object> handleResourceNotFoundException(ResourceNotFoundException ex) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("Owner not found");
		ApiErrors errors = new ApiErrors(message, details, HttpStatus.BAD_REQUEST, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);

	}

	@ExceptionHandler(HouseNotFoundException.class)
	public ResponseEntity<Object> handleHouseNotFoundException(HouseNotFoundException ex) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("House not found");
		ApiErrors errors = new ApiErrors(message, details, HttpStatus.NOT_FOUND, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errors);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<Object> handleOther(Exception ex) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("Unknown exception");
		details.add(ex.getMessage());
		ApiErrors errors = new ApiErrors(message, details, HttpStatus.BAD_REQUEST, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);

	}


	@ExceptionHandler(HouseNotFoundByOwnerIdException.class)
	public ResponseEntity<Object> handleHouseNotFoundByOwnerIdException(HouseNotFoundByOwnerIdException ex) {
		String message = ex.getMessage();
		List<String> details = new ArrayList<>();
		details.add("House not found by this ownerId.......");
		ApiErrors errors = new ApiErrors(message, details, HttpStatus.NOT_FOUND, LocalDateTime.now());
		logger.info("Error occured",ex);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errors);
	}

}
