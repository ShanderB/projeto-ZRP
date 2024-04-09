package com.example.zrp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class ZrpApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZrpApplication.class, args);
	}

}
