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
import org.springframework.web.bind.annotation.RestController;

import com.cts.beans.UserRegistration;
import com.cts.service.IUserService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


@EnableSwagger2
@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:3000/")
public class UserController {
	 @Autowired
	IUserService ownerService;
	 
	 
	 /** 
	  * It will return list of owner/customer
	  * @return
	  */
	 @GetMapping
	 public List<UserRegistration> printAllOwner(){
		 System.out.println("Reached here");
		 return ownerService.getAllOwner();
		 
	 }
	 
	 /**
	  * it will return the list of user via user id
	  * @param ownerid
	  * @return
	  */
	 
	 @GetMapping("/{ownerid}")
	 public ResponseEntity<UserRegistration> getOwnerById(@PathVariable int ownerid){
		 UserRegistration o= ownerService.findOwnerById(ownerid);
		 if(o!= null) {
			 return new ResponseEntity<UserRegistration> (o,HttpStatus.OK);
		 }else {
			 return new ResponseEntity<UserRegistration> (o,HttpStatus.NOT_FOUND);
		 }
	 }
	 
	 
	 /**
	  * it will register the user details in sql workbench
	  * @param owner
	  * @return
	  */
	 
//	 @PostMapping
//	 public ResponseEntity<UserRegistration> insertOwner(@RequestBody UserRegistration owner ){
//		 System.out.println("Request recieved");
//		 
//		 if(owner!=null && ownerService.checkUserRegistration(owner)==true) {
//			 System.out.println(owner.getEmail());
//			 UserRegistration result=ownerService.createOwner(owner);
//			 System.out.println(owner.getEmail()+" Registration completed");
//			 if(result!=null && ownerService.checkUserRegistration(result)==true) {
//			 return new ResponseEntity<UserRegistration> (result,HttpStatus.OK);
//		 }else {
//			 return new ResponseEntity<UserRegistration> (result,HttpStatus.NOT_FOUND);
//		 }
//	 }
//		 return new ResponseEntity<UserRegistration> (owner,HttpStatus.NOT_FOUND);
//		 
//	 }
	 
	 
	 @PostMapping
	 public ResponseEntity<UserRegistration> insertOwner(@RequestBody UserRegistration owner ){
		 System.out.println("Request recieved");
		 
		 if(owner!=null && ownerService.checkUserRegistration(owner)==true) {
			 System.out.println(owner.getEmail());
			 UserRegistration result=ownerService.createOwner(owner);
			 System.out.println(owner.getEmail()+" Registration completed");
			 return new ResponseEntity<UserRegistration> (result,HttpStatus.OK);
		 }
		 return new ResponseEntity<UserRegistration> (owner,HttpStatus.NOT_FOUND);
		 
	 }
	 
	 /**
	  * it will update the user details in workbench via id
	  * @param modifiedOwner
	  * @param ownerid
	  * @return
	  */
	 
	 @PutMapping("/{ownerid}")
	 public ResponseEntity<UserRegistration> updateOwner(@RequestBody UserRegistration modifiedOwner, @PathVariable int ownerid ){
		 //if(modifiedOwner.getAdhaarNo()!="" && modifiedOwner.getEmail()!="" && modifiedOwner.getFirstName()!="")
		 if(!(ownerService.checkUserRegistration(modifiedOwner)==true))
		 {
		 return new ResponseEntity<UserRegistration>(ownerService.updateOwner(modifiedOwner, ownerid),HttpStatus.OK);
	 }
		 else
			 return new ResponseEntity<UserRegistration>( ownerService.updateOwner(ownerService.findOwnerById(ownerid), ownerid) ,HttpStatus.NOT_FOUND);
	 }
	 
	 
	 
	 /**
	  * it will delete the user details if found malpractices via admin...
	  * @param ownerid
	  * @return
	  */
	 
	 @DeleteMapping("/{ownerid}")
	 public ResponseEntity<String> removeOwner(@PathVariable int ownerid){
		 if(ownerService.removeOwner(ownerid)) {
			 return new ResponseEntity<String>(" Owner deleted successfully", HttpStatus.OK);
		 }else {
			 return new ResponseEntity<String> ("Owner not found",HttpStatus.OK);
		 }
		
	 }

}
