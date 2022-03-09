class Card{
    constructor(name,cost){
        this.name = name
        this.cost = cost
    }
}
class Unit extends Card{
    constructor(name,cost, power, res){
    super(name,cost)
    this.power = power
    this.res = res
    }

    attack(target){
    if( target instanceof Unit)
        target.res -= this.power
    }else {
        throw new Error( "target nust be a unit!")
    }
}