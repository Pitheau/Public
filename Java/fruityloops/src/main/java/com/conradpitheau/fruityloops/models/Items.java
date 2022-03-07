package com.conradpitheau.fruityloops.models;

public class Items {
	   // MEMBER VARIABLES
    protected String name;
    protected double price;
    
    
    // CONSTRUCTOR
    
    public Items() {
    }
    
	public Items(String name, double price) {
		super();
		this.name = name;
		this.price = price;
	}
	
	// Getters and Setters!
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	
	
    
    
    

}
