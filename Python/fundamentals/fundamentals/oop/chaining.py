class User:
    def __init__(self, name):
        self.name = name
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        
    def make_withdrawal(self,amount):
        self.account_balance -= amount


    def display_user_balance(self):
        print(self.name, self.account_balance)
    

Conrad = User("Conrad Pitheau")
Wren = User("Wren Pitheau")
Dvora = User("Dvora Pitheau")

Conrad.make_deposit(1000).make_deposit(1000).make_deposit(1000).make_withdrawal(1).display_user_balance()

Wren.make_deposit(100).make_deposit(400).make_withdrawal(50).make_withdrawal(100).display_user_balance()

Dvora.make_deposit(500).make_withdrawal(100).make_withdrawal(110).make_withdrawal(120).display_user_balance()
