package com.conradpitheau.books.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.conradpitheau.books.models.Book;
import com.conradpitheau.books.services.BookService;

@Controller
public class BookController {
	@Autowired
	private BookService bookService;
	
	@GetMapping("/")
	public String dashboard(Model model) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("books", books);
		return "show.jsp";
	}

	@GetMapping("/book/{id}")
	public String showOne(@PathVariable("id")Long id, Model model) {
		Book book = bookService.findBook(id);
		model.addAttribute("book", book);
		return "show.jsp";
	}
}