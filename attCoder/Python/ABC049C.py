# ABC049C - Daydream  / 
# Time Limit: 2 sec / Memory Limit: 256 MiB

# Score : 
# 300 points

# Problem Statement
# You are given a string 
# S consisting of lowercase English letters. Another string 
# T is initially empty. Determine whether it is possible to obtain 
# S=T by performing the following operation an arbitrary number of times:

# Append one of the following at the end of 
# T: dream, dreamer, erase and eraser.

s = input()

words = ["dream", "dreamer", "erase", "eraser"]

while len(s) > 0:
    found = False

    for word in words:
        if s.endswith(word):
            s = s[:-len(word)]
            found = True
            break

    if not found:
        print("NO")
        break
else:
    print("YES")
