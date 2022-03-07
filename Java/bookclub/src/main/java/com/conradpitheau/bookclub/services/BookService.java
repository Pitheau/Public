package com.conradpitheau.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.conradpitheau.bookclub.models.Book;
import com.conradpitheau.bookclub.repositories.BookRepo;


@Service
public class BookService {

	@Autowired
	private BookRepo bookRepo;
	
	//get all
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	
	//get one
	public  Book oneBook(Long bookId) {
		Optional<Book> optionalBook= bookRepo.findById(bookId);
		if(optionalBook.isPresent()) {
			return optionalBook.get();
		}else {
			return null;
		}
	}
	//create
	public Book createBook(Book book) {
		return  bookRepo.save(book);
	}
	//update
	public Book updateBook(Book book) {
		return  bookRepo.save(book);
	}
	
	//delete
	public void deleteBook(long id) {
		bookRepo.deleteById(id);
	}

	
}


