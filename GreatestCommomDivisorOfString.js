// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

var gcdOfStrings = function(str1, str2) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    // Calculate the length of the greatest common divisor (GCD) of str1 and str2
    const gcdLength = gcd(str1.length, str2.length);
    
    // Extract a candidate substring from str1 based on the GCD length
    const candidateSubstring = str1.substring(0, gcdLength);
    
    // Check if the candidate substring divides both str1 and str2 evenly
    //new RegExp(candidateSubstring, 'g') creates a regular expression object that represents a global search for the pattern stored in candidateSubstring.
    if (str1.replace(new RegExp(candidateSubstring, 'g'), '') === '' &&
        str2.replace(new RegExp(candidateSubstring, 'g'), '') === '') {
            console.log("Ans is "+candidateSubstring);
        return candidateSubstring; // Return the candidate substring as the result
    } else {
        return ''; // If no common divisor found, return an empty string
    }
    
};
gcdOfStrings("ABCABC","ABC");
gcdOfStrings("ABABAB","ABAB");