package com.cts.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.beans.HouseDetails;


@Repository
public interface HouseDetailsRepository extends JpaRepository<HouseDetails, Integer> {

}
