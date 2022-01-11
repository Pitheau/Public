class User:
    def __init__(self, name):
        self.name = name
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        
    def make_withdrawal(self,amount):
        self.account_balance -= amount


    def display_user_balance(self):
        print(self.account_balance)
    

Conrad = User("Conrad Pitheau")
Wren = User("Wren Pitheau")
Dvora = User("Dvora Pitheau")

Conrad.make_deposit(1000)
Conrad.make_deposit(1000)
Conrad.make_deposit(1000)
Conrad.make_withdrawal(1)
print(Conrad.account_balance)

Wren.make_deposit(100)
Wren.make_deposit(400)
Wren.make_withdrawal(50)
Wren.make_withdrawal(100)
print(Wren.account_balance)

Dvora.make_deposit(500)
Dvora.make_withdrawal(100)
Dvora.make_withdrawal(110)
Dvora.make_withdrawal(120)
print(Dvora.account_balance)
