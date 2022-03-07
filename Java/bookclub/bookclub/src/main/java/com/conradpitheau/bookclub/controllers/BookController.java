package com.conradpitheau.bookclub.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.conradpitheau.bookclub.models.Book;
import com.conradpitheau.bookclub.models.User;
import com.conradpitheau.bookclub.services.BookService;
import com.conradpitheau.bookclub.services.UserService;




@Controller
public class BookController {

		@Autowired
		private BookService	bookService;
		@Autowired
		private UserService userService;

		//Render show page with all books and user Id_________________
		
		 @GetMapping("/show")
		    public String show( Model model, HttpSession session) {
			    List<Book> books = bookService.allBooks();
			    model.addAttribute("books", books);
		    	if(session.getAttribute("userId") ==null) {
		    	return "redirect:/";
		    	}
		    	Long userId = (Long)session.getAttribute("userId");
		    	User user = userService.findOneUser(userId);
		    	model.addAttribute("user", user);
		    	return "show.jsp";
		 }
		 
		 //Create new book Form_________________
		 
		 @GetMapping("book/new")
		 public String createBookForm(@ModelAttribute("book")Book book, Model model) {
			 List<User> users = userService.allUsers();
			 model.addAttribute("user",users);
			 return "createBook.jsp";
		 }
		 
		 //Create new book Process________________
		 
		 @PostMapping("book/new")
		 public String createBookProcess(@Valid @ModelAttribute("book")Book book, BindingResult result) {
			 if(result.hasErrors()) {				
				 return "createBook.jsp";
			 }else {
				 bookService.createBook(book);
				 return "redirect:/show";
			 }
		 }
		
		 //Show One Book_________________
		 
		 @GetMapping("/book/{bookId}")
		 public String showOneBook(@PathVariable("bookId")Long bookId, Model model) {
			 model.addAttribute("book", bookService.oneBook(bookId));
			 return"showOne.jsp";
		 }
		 
		
		 
}		
