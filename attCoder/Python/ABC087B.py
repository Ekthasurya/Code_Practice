# ABC087B - Coins  / 
# Time Limit: 2 sec / Memory Limit: 256 MiB

# Score : 
# 200 points

# Problem Statement
# You have 
# A 
# 500-yen coins, 
# B 
# 100-yen coins and 
# C 
# 50-yen coins (yen is the currency of Japan). In how many ways can we select some of these coins so that they are 
# X yen in total?

# Coins of the same kind cannot be distinguished. Two ways to select coins are distinguished when, for some kind of coin, the numbers of that coin are different.

# Constraints
# 0≤A,B,C≤50
# A+B+C≥1
# 50≤X≤20 
# 000
# A, 
# B and 
# C are integers.
# X is a multiple of 
# 50.
# Input
# Input is given from Standard Input in the following format:

# A
# B
# C
# X
# Output
# Print the number of ways to select coins.

# Sample Input 1
# Copy
# 2
# 2
# 2
# 100
# Sample Output 1
# Copy
# 2
# There are two ways to satisfy the condition:

# Select zero 
# 500-yen coins, one 
# 100-yen coin and zero 
# 50-yen coins.
# Select zero 
# 500-yen coins, zero 
# 100-yen coins and two 
# 50-yen coins.


a=int(input())
b=int(input())
c=int(input())
d=int(input())
count =0

for i in range(a+1):
  for j in range(b+1):
    for k in range(c+1):
      total = i * 500 + j * 100 + k * 50
      if (total == d):
        count+=1
print(count)
