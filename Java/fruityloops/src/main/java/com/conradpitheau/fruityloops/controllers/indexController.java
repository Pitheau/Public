package com.conradpitheau.fruityloops.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.conradpitheau.fruityloops.models.Items;

@Controller
public class indexController {
	
	@GetMapping("/index")
	public String index(){
		return "index.jsp";
	}
    @GetMapping("/fruit")
    public String index(Model model) {
        
        ArrayList<Items> fruits = new ArrayList<Items>();
        fruits.add(new Items("Kiwi", 1.5));
        fruits.add(new Items("Mango", 2.0));
        fruits.add(new Items("Goji Berries", 4.0));
        fruits.add(new Items("Guava", 1.75));
        fruits.add(new Items("Pineapple", 2.0));
        fruits.add(new Items("Limes", 1.5));
        fruits.add(new Items("Lychee", 2.0));
        
        model.addAttribute("fruits", fruits);
        
        return "index.jsp";
    }

	

}
