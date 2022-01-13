
from xml.sax.saxutils import prepare_input_source


class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = "first_name"
        self.last_name = "last_name"
        self.treats = "treats"
        self.pet_food = "pet_food"
        self.pet = "pet"


# walk() - walks the ninja's pet invoking the pet play() method
    def walk(self):
        self.pet.play()
        return self

# feed() - feeds the ninja's pet invoking the pet eat() method
    def feed(self):
        self.pet.eat()
        return self

    def bath(self):
        self.pet.noise
        



class Pet:
    def __init__(self, name, type, tricks):
        self.name = "name"
        self.type = "type"
        self.trick = "tricks"
        self.health = 99
        self.energy = 50

    def sleep(self):
        self.energy += 25
        return self
        
    def eat(self):
        self.energy += 5
        self.health += 10
        return self

    def play(self):
        self.health += 5
        return self

    def noise(self):
        print(" Bark! Bark!! Bark!")



Conrad = Ninja("Conrad", "Pitheau", "biscuit", "salmon kibble", "Peanut")
Peanut = Pet("Peanut", "dog", "love")

Conrad.feed()
print(Peanut.energy, Peanut.health)


