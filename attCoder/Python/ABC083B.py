# Some Sums  / 
# Time Limit: 2 sec / Memory Limit: 256 MiB

# Score : 
# 200 points

# Problem Statement
# Find the sum of the integers between 
# 1 and 
# N (inclusive), whose sum of digits written in base 
# 10 is between 
# A and 
# B (inclusive).

# Constraints
# 1≤N≤10 
# 4
 
# 1≤A≤B≤36
# All input values are integers.
# Input
# Input is given from Standard Input in the following format:

# N 
# A 
# B
# Output
# Print the sum of the integers between 
# 1 and 
# N (inclusive), whose sum of digits written in base 
# 10 is between 
# A and 
# B (inclusive).

# Sample Input 1
# Copy
# 20 2 5
# Sample Output 1
# Copy
# 84
# Among the integers not greater than 
# 20, the ones whose sums of digits are between 
# 2 and 
# 5, are: 
# 2,3,4,5,11,12,13,14 and 
# 20. We should print the sum of these, 
# 84.

a,b,c=map(int,input().split(" "))
total=0
for i in range(1,a+1):
  sum=0
  n=i
  while n >0:
    rem = n%10
    n = n//10
    sum += rem
  if sum >=b and sum<=c:
    total += i
print(total)