package com.conradpitheau.dojoninja.controllers;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.conradpitheau.dojoninja.models.Dojo;
import com.conradpitheau.dojoninja.models.Ninja;
import com.conradpitheau.dojoninja.services.MainService;


@Controller
public class MainController {
	@Autowired
	private MainService mainService;
	
	@GetMapping("/")
	public String index() {
		return "redirect:/dojo/new";
	}
	
	@GetMapping("/dojo/new")
	public String createDojoForm(@ModelAttribute("dojo")Dojo dojo){
		return "newDojo.jsp";
	}
	
	@PostMapping("/dojo/new")
	public String creatDojoProcess(
	@Valid @ModelAttribute("dojo")Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "newDojo.jsp";
		}else {
			mainService.saveDojo(dojo);
			return "redirect:/ninja/new";
		}
	}
	@GetMapping("/ninja/new")
	public String createNinjaForm(@ModelAttribute("ninja")Ninja ninja, Model model){
		List<Dojo> dojos =  mainService.allDojos();
		model.addAttribute("dojos", dojos);
		return "newNinja.jsp";
	}

	@PostMapping("/ninja/new")
	public String creatNinjaProcess(
	@Valid @ModelAttribute("ninja")Ninja ninja, BindingResult result) {
		if(result.hasErrors()) {
			return "newNinja.jsp";
		}else {
			mainService.saveNinja(ninja);
			return "redirect:/dojo/{}";
		}
	}
	@GetMapping("/dojo/{id}")
	public String showOne(@PathVariable("id")Long id, Model model) {
		model.addAttribute("dojo");
		return "dojo.jsp";
	}
	
	
}
