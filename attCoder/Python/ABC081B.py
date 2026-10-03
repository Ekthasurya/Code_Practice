# ABC081B - Shift only  / 
# Time Limit: 2 sec / Memory Limit: 256 MiB

# Score : 
# 200 points

# Problem Statement
# There are 
# N positive integers written on a blackboard: 
# A 
# 1
# ​
#  ,...,A 
# N
# ​
#  .

# Snuke can perform the following operation when all integers on the blackboard are even:

# Replace each integer 
# X on the blackboard by 
# X divided by 
# 2.
# Find the maximum possible number of operations that Snuke can perform.

# Constraints
# 1≤N≤200
# 1≤A 
# i
# ​
#  ≤10 
# 9
 
# Input
# Input is given from Standard Input in the following format:

# N
# A 
# 1
# ​
  
# A 
# 2
# ​
#   ... 
# A 
# N
# ​
 
# Output
# Print the maximum possible number of operations that Snuke can perform.

# Sample Input 1
# Copy
# 3
# 8 12 40
# Sample Output 1
# Copy
# 2
# Initially, 
# [8,12,40] are written on the blackboard. Since all those integers are even, Snuke can perform the operation.

# After the operation is performed once, 
# [4,6,20] are written on the blackboard. Since all those integers are again even, he can perform the operation.

# After the operation is performed twice, 
# [2,3,10] are written on the blackboard. Now, there is an odd number 
# 3 on the blackboard, so he cannot perform the operation any more.

# Thus, Snuke can perform the operation at most twice.

a=int(input())
b=list(map(int,input().split()))
count =0
flag =True
if a == len(b):
  while flag:
    flag = True
    for i in range(len(b)):
      if b[i] % 2 != 0 or b[i] < 0 :
        flag =False
        break
    if flag == False :
        break
    for i in range(len(b)):
      b[i] =b[i]//2
      
    count += 1
print(count)    
             

  















