package com.cts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@ComponentScan("com")
@EnableSwagger2
public class UserRegistrationApplication {
	
	 static Logger logger = LoggerFactory.getLogger(UserRegistrationApplication.class);

	public static void main(String[] args) {
		
		logger.info("Starting Spring boot application");
		SpringApplication.run(UserRegistrationApplication.class, args);
		logger.info("Ending Spring boot application");
	}

}
