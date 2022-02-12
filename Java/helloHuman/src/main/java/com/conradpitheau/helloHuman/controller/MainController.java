package com.conradpitheau.helloHuman.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
	
	@RequestMapping("/")
	public String index() {
		return "Hello";
	}
	@GetMapping("/name")
	public String humanName(
			@RequestParam(value ="name", required = false)String name) {
		if(name == null) {
			return "Hello Human";
		}else {
			return "Hello" + " " + name;
		}
	}
}
