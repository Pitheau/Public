package com.conradpitheau.books.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.conradpitheau.books.models.Book;
import com.conradpitheau.books.services.BookService;

@Controller
public class BooksController {

	@Autowired
	private BookService bookService;
	    
	    @RequestMapping("/books")
	    public String index(Model model) {
	        List<Book> books = bookService.allBooks();
	        model.addAttribute("books", books);
	        return "/index.jsp";
	    }

}
