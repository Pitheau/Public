package com.conradpitheau.zooKeeper;

public class Bat extends Mammal {
	
	
	
	protected Bat() {
		super();
		this.energy = 300;
	
	}
	public void fly() {
		energy -= 50;
		System.out.println("They flew energy -50.");
	}
	
	public void eatHumans() {
		energy += 25;
		System.out.println("Well, never mind, energy increase + 25");
	}
	public void attackTown() {
		energy -= 100;
		System.out.println("Town on fire.  Energy - 100");
	}
}
