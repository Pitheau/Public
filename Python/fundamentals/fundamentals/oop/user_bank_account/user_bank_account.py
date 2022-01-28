

class BankAccount:

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if amount > self.balance:
            print ("Insufficient funds: Charging a $5 fee")
            self.balance -+ 5
        else :
            self.balance -= amount
        return self
        
    def display_account_info(self):
        print(f"Your balance is: {self.balance}.")
        return self

    def yield_interest(self):
        self.balance += self.balance * self.int_rate
        return self

Peanut = BankAccount(.10, 100)
Pickeles = BankAccount(.01, 1000)

class User:
    def __init__(self, name):
        self.name = name
        self.account = BankAccount(int_rate=.10, balance=1000)
 

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

        
    def make_withdrawal(self,amount):
        self.account.withdraw(amount)
        return self



    def display_user_balance(self):
        print(self.name), self.account.display_account_info()
        return self
    

Conrad = User("Conrad Pitheau")
Wren = User("Wren Pitheau")
Dvora = User("Dvora Pitheau")


Conrad.make_deposit(1000)
Conrad.make_deposit(1000)
Conrad.make_deposit(1000)
Conrad.make_withdrawal(1)
Conrad.display_user_balance()

Wren.make_deposit(100)
Wren.make_deposit(400)
Wren.make_withdrawal(50)
Wren.make_withdrawal(100)
Wren.display_user_balance()

Dvora.make_deposit(500)
Dvora.make_withdrawal(100)
Dvora.make_withdrawal(110)
Dvora.make_withdrawal(120)
Dvora.display_user_balance()

