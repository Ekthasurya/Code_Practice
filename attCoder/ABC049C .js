// Daydream  / 
// Time Limit: 2 sec / Memory Limit: 256 MiB

// Score : 
// 300 points

// Problem Statement
// You are given a string 
// S consisting of lowercase English letters. Another string 
// T is initially empty. Determine whether it is possible to obtain 
// S=T by performing the following operation an arbitrary number of times:

// Append one of the following at the end of 
// T: dream, dreamer, erase and eraser.

const fs = require("fs");

let s = fs.readFileSync(0, "utf8").trim();

const words = ["dream", "dreamer", "erase", "eraser"];

while (s.length > 0) {
    let found = false;

    for (let word of words) {
        if (s.endsWith(word)) {
            s = s.slice(0, s.length - word.length);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("NO");
        break;
    }
}

if (s.length === 0) {
    console.log("YES");
}