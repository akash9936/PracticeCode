// 345. Reverse Vowels of a String
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"




var reverseVowels = function (s) {
    let data = s.length;
   // s = s.toLowerCase();
    let swapdata = [...s];
    data = data / 2;
    let lastSwap = s.length - 1;
    for (let i = 0; i < lastSwap; i++) 
    {
        let currentVowelss = s[i];
        let currentVowels = checkVowels(s[i]);
        console.log("At Place " + i + "-> " + currentVowelss + " currentVowels is " + currentVowels);
        if (!currentVowels) {
            continue;
        }
        while (lastSwap > i) {
            let adjesntVowelss = s[lastSwap];
            let adjesntVowels = checkVowels(adjesntVowelss);
            console.log("At adjesntVowels " + adjesntVowelss + " adjesntVowels is " + adjesntVowels);
            if (currentVowels && adjesntVowels) {
                swapdata[i] = adjesntVowelss;
                swapdata[lastSwap] = currentVowelss;
                lastSwap = lastSwap - 1;
                console.log("At swapdata place " + i + " swapdata is " + swapdata);
                break;
            }
            else {
                lastSwap = lastSwap - 1;
            }
        }

    }
    function checkVowels(s) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        if (vowels.includes(s.toLowerCase())) {
            //    console.log("checkVowels for word "+s+ " is " +true);
            return true;
        }
        else {
            //    console.log("checkVowels for word "+s+ " is " +false);
            return false;
        }
    }
    const swapdatafinal = swapdata.join("");
    console.log("Final swap data is -----> " + swapdatafinal);
};

const s = "lAetcode";
reverseVowels(s);