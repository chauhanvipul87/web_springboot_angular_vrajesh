package com.iana;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RestApiController {

	public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

	
	// -------------------Retrieve All Users---------------------------------------------

	@RequestMapping(value = "/message/", method = RequestMethod.GET)
	public ResponseEntity<Map<String, Object>> listAllUsers() {
		//{"id":1,"content":"Hello, World!"}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", 1);
		map.put("content", "AngularJS call to REST API");
		//List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
		//data.add(map);
		return new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
	}

	
}