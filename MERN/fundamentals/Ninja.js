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
        console.log(this.name, this.strength,this.speed, this.health)
    }
    drinkSake(){
        this.health += 10
    }
}
const newNinja = new Ninja("Wren", 100)

console.log(newNinja)
newNinja.sayName()
newNinja.showStats()
newNinja.drinkSake()
newNinja.showStats()
