# All intergers from 0 to 150
'''
x = 0
for x in range( 0, 150):
    print(x)
'''
"""
x = 5
for x in range(5, 1000, 5):
    print(x)
"""
#print intergers 1 to 100 if divisable by e print "codoing"insetead, if divisible by 10, print "coding Dojo"
'''
x = 0
for x in range (1, 100):
    if x % 10 == 0:
        print("Coding Dojo")
        continue
    if x % 5 == 0:
        print("Coding")
    print(x)
'''
'''
#odd intergers 0 to 500000 and print finale sum
x = 1
sum = 0
for x in range(1, 500000, 2):
    sum += x
print(sum)
'''
# print positive numbers startin at 2018, counting down by fours
'''
x = 2018
for x in range(2018, 0, -4):
    print(x)
'''
# set three variable from low to him printing only those that are mulitples of set variable

lowNum = 3
highNum = 55
multi = 7
for x in range(lowNum, highNum):
    if x % 7 == 0:
        print(x)

