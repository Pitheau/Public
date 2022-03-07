package com.conradpitheau.daikichi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class MainController {
	
	@GetMapping("")
	public String hello(){
		return " Hello";
	}
	
	@GetMapping("/travel/{city}")
	public String showCity(@PathVariable("city") String city) {
		return "Yeah! You soon will be traveling to " + city +".";
	}
	
	@GetMapping("/lotto/{number}")
	public String luckyNum(@PathVariable("number") Integer number) {
		if(number %2 == 0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		} return "You have enjoyed the fruits of you labor but now is a great time to spend time with family and friends.";
	}
}

