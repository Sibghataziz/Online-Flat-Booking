package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.cts.beans.HouseDetails;
import com.cts.dao.HouseDetailsRepository;

@DataJpaTest
@TestMethodOrder(OrderAnnotation.class)
public class HouseDetailsRepositoryTest {

	@Autowired
	HouseDetailsRepository houseRepository;
	
	@Test
	 @Order(1)
	public void testHouseById() {
		Optional<HouseDetails> op = houseRepository.findById(61); 
		if(op.isPresent()) {
			assertThat(op.get().getHouseId()).isEqualTo(61);
		}
		else {
			assertThat(op.get().getHouseId()).isEqualTo(null);
		}
	}
	
	@Test
	 @Order(2)
	public void testAllHouse() {
	    List<HouseDetails> allHouses = (List<HouseDetails>) houseRepository.findAll();
	    assertThat(allHouses).size().isGreaterThan(0);
	}
	

}
