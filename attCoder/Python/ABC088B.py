# Card Game for Two  / 
# Time Limit: 2 sec / Memory Limit: 256 MiB

# Score: 
# 200 points

# Problem Statement
# We have 
# N cards. A number 
# a 
# i
# ​
#   is written on the 
# i-th card.
# Alice and Bob will play a game using these cards. In this game, Alice and Bob alternately take one card. Alice goes first.
# The game ends when all the cards are taken by the two players, and the score of each player is the sum of the numbers written on the cards he/she has taken. When both players take the optimal strategy to maximize their scores, find Alice's score minus Bob's score.

# Constraints
# N is an integer between 
# 1 and 
# 100 (inclusive).
# a 
# i
# ​
#   (1≤i≤N) is an integer between 
# 1 and 
# 100 (inclusive).
# Input
# Input is given from Standard Input in the following format:

# N
# a 
# 1
# ​
  
# a 
# 2
# ​
  
# a 
# 3
# ​
  
# ... 
# a 
# N
# ​
 
# Output
# Print Alice's score minus Bob's score when both players take the optimal strategy to maximize their scores.

# Sample Input 1
# Copy
# 2
# 3 1
# Sample Output 1
# Copy
# 2
# First, Alice will take the card with 
# 3. Then, Bob will take the card with 
# 1. The difference of their scores will be 
# 3 - 
# 1 = 
# 2.

# Sample Input 2
# Copy
# 3
# 2 7 4
# Sample Output 2
# Copy
# 5

a=int(input())
b=list(map(int,input().split()))
b.sort(reverse=True)
allic=0
bob=0
for i in range(len(b)):
  if i%2 ==0:
    allic += b[i]
  else:
    bob +=b[i]
dif=allic-bob
print(dif)