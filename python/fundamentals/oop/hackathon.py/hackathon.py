import random 

base_speed=.05
class Aliens:
    def __init__( self , name ):
        self.name = name
        self.strength = 10
        self.speed = 5
        self.health = 100    
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")
    def attack( self , cowboys ):
        if random.random() > cowboys.speed*base_speed:
            cowboys.health -= self.strength
            self.health += (self.strength/2)
        print(f"{self.name} attacks for {self.strength} damage")
        return self

class Cowboys:
    def __init__( self , name ):
        self.name = name
        self.strength = 15
        self.bonus_speed = 0
        self.speed = 3
        self.health = 100
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")
    def basic_attack( self , aliens):
        if random.random() > aliens.speed*base_speed:
            aliens.health -= self.strength
            self.bonus_speed += 1
            self.speed += self.bonus_speed
            print(f"{self.name} attacks for {self.strength}")
            print(f"{self.name}'s speed increases to {self.speed}")
        else:
            self.bonus_speed = 0
            print(f"{self.name} has lost his speed bonus")
        return self
    def one_in_the_chamber(self, aliens):
        if random.random() < .16666666:
            aliens.health -= self.strength*2
            print(f"{self.name} takes out his revolver and shoots for double the damage!")
        else:
            print(f"{self.name} takes out his revolver and misses")
        return self

marvin = Aliens("Marvin the martian")
clint = Cowboys("Clint Eastwood")

while marvin.health > 0 and clint.health > 0:
    print("Type 'Start' when ready")
    player = input()
    if player == "Start":
        print("It is your turn. Choose an attack( basic / one in the chamber ):")
        move = input()
        if move == "basic":
            clint.basic_attack(marvin)
        elif move == "one in the chamber":
            clint.one_in_the_chamber
        else:
            print("Not a valid input")
    else:
        print("That was not a valid input")
        print("Type start when ready")
        move = input()
if marvin.health <= 0:
    print("You Won!!")
else:
    print("You Lost :(")


