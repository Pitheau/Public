class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health
        this.speed = 3
        this.strength = 3 
    }

    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log()
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200
        this.speed = 10
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake();
        console.log( "You should not give me sake! I'm too drunk.")
    }
}
const superNinja = new Sensei("Guy")

console.log(superNinja)
superNinja.speakWisdom()
console.log(superNinja)