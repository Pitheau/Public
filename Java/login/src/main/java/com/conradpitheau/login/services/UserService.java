package com.conradpitheau.login.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.conradpitheau.login.models.LoginUser;
import com.conradpitheau.login.models.User;
import com.conradpitheau.login.repositories.UserRepo;

@Service
public class UserService {
	
	private final UserRepo userRepo;
	
	public UserService(UserRepo userRepo) {
		this.userRepo = userRepo;
	}
	
	public List<User> allUsers(){
		return userRepo.findAll();
	}
	
	
    public User register(User newUser, BindingResult result) {  
    	Optional<User> potentialUser = userRepo.findByEmail(newUser.getEmail());
    	if(potentialUser.isPresent()) {
    		result.rejectValue("email", "unique","This email is already in use.");
    	}
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    		result.rejectValue("confirm", "match", "The confirmed password does not match");
    		return null;
    	}
    	if(result.hasErrors()) {
    	return null;
    	}
    	String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashed);
    	return userRepo.save(newUser);
    }
    public User login(LoginUser newLogin, BindingResult result) {
    	Optional<User> potentialUser = userRepo.findByEmail(newLogin.getEmail());
    	if(!potentialUser.isPresent()) {
    		result.rejectValue("email", "unique","This email not registered.");
    		return null;
    	}
    	User user= potentialUser.get();
    	if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
    	    result.rejectValue("password", "Matches", "Invalid Password!");
    	}    	
    	if(result.hasErrors()) {
        	return null;
        	}
    	
    	return user;
        
    	}

}
