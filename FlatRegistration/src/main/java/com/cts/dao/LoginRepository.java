package com.cts.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.beans.UserRegistration;
@Repository
public interface LoginRepository extends JpaRepository<UserRegistration, Integer> {

}
