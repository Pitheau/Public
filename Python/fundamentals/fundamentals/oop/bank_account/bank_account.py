
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
        print(f"Your balance {self.balance}")
        return self

    def interest_yeild(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self

    @classmethod
    def print_all_accounts(cls):
            for account in cls.accounts:
                account.display_account_info()



Peanut = BankAccount(.10, 100)
Pickeles = BankAccount(.01, 1000)

Pickeles.deposit(100).deposit(100).deposit(100).withdraw(100).interest_yeild().display_account_info()
Peanut.deposit(200).deposit(800).withdraw(100).withdraw(100).withdraw(200).withdraw(200).interest_yeild().display_account_info()

# print(Pickeles.display_account_info)
# print(Peanut.display_account_info)

# BankAccount.print_all_accounts()
