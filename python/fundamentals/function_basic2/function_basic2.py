# Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).

# def countdown(x):
#     for i in range(x, 0, -1):
#         print(i)

# countdown(6)    

# # Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
# # Example: print_and_return([1,2]) should print 1 and return 2
# def print_and_return(first, second):
#     print(first)
#     return(second)

# print_and_return(12,40)

# First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
def first_plus_length(x):
    for i in x:
        if i == 0:
            print(i + (len(x))

first_plus_length([20,19,18,17,16,15])


# Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)
# Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
# Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,4]
# Example: values_greater_than_second([3]) should return False
# This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
# Example: length_and_value(4,7) should return [7,7,7,7]
# Example: length_and_value(6,2) should return [2,2,2,2,2,2]