package com.conradpitheau.savetravels.controllers;

import java.awt.print.Book;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.conradpitheau.savetravels.models.Expense;
import com.conradpitheau.savetravels.services.ExpenseService;

@Controller
public class ExpenseController {
	
	@Autowired
	private ExpenseService expenseService;
	
	@GetMapping("/index")
	public String showAll(Model model, @ModelAttribute("expense")Expense expense) {
		List<Expense> expenses = expenseService.allExpenses();
		model.addAttribute("expenses", expenses);
		return "index.jsp";
	}
	
	@GetMapping("expenses/{id}")
	public String showOneExpense(@PathVariable("id")Long id, Model model) {
		Expense expense = expenseService.findExpense(id);
		model.addAttribute("expense", expense);
		return "showOne.jsp";
	}
	
	@PostMapping("/expense/new")
	public String processCreate(@Valid @ModelAttribute("expense")Expense expense, BindingResult result) {
		if(result.hasErrors()) {
			return "index.jsp";
		}else {
			expenseService.createExpense(expense);
		}
		return"redirect:/index";
	}
	@RequestMapping("/expense/{id}/edit")
	    public String edit(@PathVariable("id") Long id, Model model) {
	        Expense expense = expenseService.findExpense(id);
	        model.addAttribute("expense", expense);
	        return "/edit.jsp";
	    }
	    
	 @RequestMapping(value="/expense/{id}", method=RequestMethod.PUT)
	    public String update(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
	        if (result.hasErrors()) {
	            return "/edit.jsp";
	        } else {
	            expenseService.updateExpense(expense);
	            return "redirect:/index";
	        }
	    }
	 @RequestMapping(value="/expense/{id}", method=RequestMethod.DELETE)
	    public String destroy(@PathVariable("id") Long id) {
	       	expenseService.deleteExpense(id);
	        return "redirect:/index";
	    }
	
	

}
