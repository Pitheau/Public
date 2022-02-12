package com.conradpitheau.zooKeeper;

public class Gorilla extends Mammal {
	
	
	public Gorilla() {
	}
	
	public Gorilla(int energy) {
		super(energy);
	}
	
	public void throwSomething() {
		this.energy -= 5;
		System.out.println("Threw something.  -5 in energy");
	}
	public void eatBananas() {
		this.energy += 10;
		System.out.println("Ate a banana. +10 energy");
	}
	public void theyClimb() {
		this.energy -= 10;
		System.out.println("Climbed. -10 energy");
		
	}
}
