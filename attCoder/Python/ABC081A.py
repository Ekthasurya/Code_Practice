# Placing Marbles

# Problem Statement
# Snuke has a grid consisting of three squares numbered 
# 1, 
# 2 and 
# 3. In each square, either 0 or 1 is written. The number written in Square 
# i is 
# s 
# i
# ​
#  .

# Snuke will place a marble on each square that says 1. Find the number of squares on which Snuke will place a marble.

# Input
# Input is given from Standard Input in the following format:

# s 
# 1
# ​
#  s 
# 2
# ​
#  s 
# 3
# ​
 
# Output
# Print the answer.


a=list(map(int,input()))
count =0
for i in range(len(a)):
    count += a[i]
print(count)
  















