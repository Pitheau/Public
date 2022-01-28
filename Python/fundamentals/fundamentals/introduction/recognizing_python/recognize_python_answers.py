num1 = 42 # variable declaration
num2 = 2.3#  variable declaration
boolean = True # Data Type, primitive, boolean
string = 'Hello World' #variable declaration
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, array
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #initialize a list
fruit = ('blueberry', 'strawberry', 'banana')#variable declaration, string
print(type(fruit)) #log statement
print(pizza_toppings[1]) #log statement
pizza_toppings.append('Mushrooms')#list add value
print(person['name']) #log statement
person['name'] = 'George' #log statement and variable declaration
person['eye_color'] = 'blue' #log statement and variabele declaration
print(fruit[2]) #log statement

if num1 > 45:  #conditionals
    print("It's greater")
else:
    print("It's lower")

if len(string) < 5: # length conditionals
    print("It's a short word!")
elif len(string) > 15:# elseif and length conditionals
    print("It's a long word!") #console.log
else: # conditional else
    print("Just right!") # console.log

for x in range(5): # for loop and conditionals
    print(x)
for x in range(2,5):
    print(x)
for x in range(2,10,3):
    print(x)
x = 0
while(x < 5): #while loop and conditionals
    print(x)
    x += 1

pizza_toppings.pop()# list delete values
pizza_toppings.pop(1) #list delete values

print(person) #console.log
person.pop('eye_color') #list item remove
print(person) #Console.log

for topping in pizza_toppings: # for loop
    if topping == 'Pepperoni': # conditional
        continue 
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)