package com.conradpitheau.zooKeeper;

public class testMammal extends Mammal{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Mammal m1 = new Mammal();
			m1.displayEnergy();
		
		Gorilla g1 = new Gorilla();
			g1.throwSomething();
			g1.throwSomething();
			g1.throwSomething();
			g1.eatBananas();
			g1.theyClimb();
			g1.displayEnergy();
	
		Bat b1 = new Bat();
			b1.attackTown();
			b1.attackTown();
			b1.attackTown();
			b1.eatHumans();
			b1.eatHumans();
			b1.fly();
			b1.fly();
			b1.displayEnergy();
	}
}
