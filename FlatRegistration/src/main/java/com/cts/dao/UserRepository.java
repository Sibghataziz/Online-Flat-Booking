package com.cts.dao;

import org.springframework.stereotype.Repository; 
import com.cts.beans.UserRegistration; 
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<UserRegistration, Integer>{

}
