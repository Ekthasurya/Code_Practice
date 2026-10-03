# Product
# Problem Statement
# AtCoDeer the deer found two positive integers, 
# a and 
# b. Determine whether the product of 
# a and 
# b is even or odd.

# Constraints
# 1 
# ≤ 
# a,b 
# ≤ 
# 10000
# a and 
# b are integers.
# Input
# Input is given from Standard Input in the following format:

# a 
# b
# Output
# If the product is odd, print Odd; if it is even, print Even.


a,b=map(int,input().split())

c=a*b
if c%2==0:
  print("Even")
else:
    print("Odd")












