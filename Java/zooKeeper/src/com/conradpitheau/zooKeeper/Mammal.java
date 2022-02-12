package com.conradpitheau.zooKeeper;

public class Mammal {
	protected int energy = 100;
	
	//Constructor
	public Mammal(){
	}

	public Mammal(int energy) {
		this.energy = energy;
	}
	
	public int displayEnergy(){
		System.out.println("---------- Display Energy ------------");
		System.out.println("Energy: " + this.energy);
		return energy;
	}

	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		this.energy = energy;
	}
}
