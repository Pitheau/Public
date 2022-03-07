package com.conradpitheau.books.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.conradpitheau.books.models.Book;
import com.conradpitheau.books.services.BookService;

@RestController
public class BooksApi {
	private final BookService service;
  	public BooksApi(BookService service){
        this.service = service;
    }
    @RequestMapping("/api/books")
    public List<Book> index() {
        return service.allBooks();
    }
    
    @RequestMapping(value="/api/books", method=RequestMethod.POST)
    public Book create(@RequestParam(value="title") String title, @RequestParam(value="description") String desc, @RequestParam(value="language") String lang, @RequestParam(value="pages") Integer numOfPages) {
        Book book = new Book(title, desc, lang, numOfPages);
        return service.createBook(book);
    }
    
    @RequestMapping("/api/books/{id}")
    public Book show(@PathVariable("id") Long id) {
        Book book = service.findBook(id);
        return book;
    }
//    @RequestMapping(value="/api/books/{id}", method=RequestMethod.PUT)
//    public Book update(
//    		@PathVariable("id") Long id, 
//    		@RequestParam(value="title") String title, 
//    		@RequestParam(value="description") String desc, 
//    		@RequestParam(value="language") String lang,
//    		@RequestParam(value="pages") Integer numOfPages) {
//        Book book = BookService.updateBook(id, title, desc, lang, numOfPages);
//        return book;
//    }
    
    @RequestMapping(value="/api/books/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        service.deleteBook(id);
    }

}
