package com.conradpitheau.omikujiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class indexController {
	
	@GetMapping("/")
		public String home() {
		return "omikuji.jsp";
	}
	@GetMapping("/show")
		public String show() {
		return "show.jsp";
	}
	
	@RequestMapping(value="/processform", method= RequestMethod.POST)
	public String fullForm(@RequestParam("luckynumber") String luckynumber,@RequestParam("city") String city,@RequestParam("person") String person,@RequestParam("profession") String profession,@RequestParam("livingThing") String livingThing,@RequestParam("niceToSomeone") String niceToSomeone,
			HttpSession session) {	
			session.setAttribute("luckynumber", luckynumber);
			session.setAttribute("city", city);
			session.setAttribute("person", person);
			session.setAttribute("profession", profession);
			session.setAttribute("livingThing", livingThing);
			session.setAttribute("niceToSomeone", niceToSomeone);

		return "redirect:/show";
	}
}
	

