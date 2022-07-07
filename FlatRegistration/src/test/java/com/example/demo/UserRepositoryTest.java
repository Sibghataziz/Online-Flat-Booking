package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.test.annotation.Rollback;

import com.cts.beans.UserRegistration;
import com.cts.dao.UserRepository;

@DataJpaTest
@TestMethodOrder(OrderAnnotation.class)
public class UserRepositoryTest {
	
	@Autowired
	UserRepository repository;
	
	@Test
	@Rollback(false)
	 @Order(1)
	public void testCreateUser() {
		UserRegistration savedUser = repository.save(new UserRegistration(
				66, "Amit","Majumder","amit@gmail.com",9123668452L,"amit$#123","Customer","286358453252","AHDGUDB548","Professor"));
	     
	    assertThat(savedUser.getUserId()).isGreaterThan(0);
	}
	
	@Test
	 @Order(2)
	public void testUserById() {
		Optional<UserRegistration> op = repository.findById(66); 
		if(op.isPresent()) {
			assertThat(op.get().getUserId()).isEqualTo(66);
		}
		else {
			assertThat(op.get().getUserId()).isEqualTo(null);
		}
	}
	
	@Test
	 @Order(3)
	public void testAllUsers() {
	    List<UserRegistration> allUsers = (List<UserRegistration>) repository.findAll();
	    assertThat(allUsers).size().isGreaterThan(0);
	}
	
	@Test
	@Rollback(false)
	 @Order(4)
	public void testUpdateUser() {
		Optional<UserRegistration> op = repository.findById(66);
		if(op.isPresent()) {
			 op.get().setEmail("amit123@gmail.com");;
		     
			    repository.save(op.get());
			     
			    Optional<UserRegistration> updatedUser = repository.findById(66);
			     
			    assertThat(updatedUser.get().getEmail()).isEqualTo("amit123@gmail.com");
		}else {
			assertThat(op.get().getEmail()).isEqualTo("amit@gmail.com");
		}
	}
	
	@Test
	@Rollback(false)
	 @Order(5)
	public void testDeleteProduct() {
		Optional<UserRegistration> op = repository.findById(66);
	     
	    repository.deleteById(op.get().getUserId());
	     
	    Optional<UserRegistration> deleteduser = repository.findById(66);
	     
	     
	    assertThat(deleteduser).isNull();       
	     
	}

}
