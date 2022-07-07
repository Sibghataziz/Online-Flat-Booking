package com.cts.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.beans.HouseDetails;
@Repository
public interface SearchingRepository extends JpaRepository<HouseDetails, Integer> {

}
