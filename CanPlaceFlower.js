// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.



// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

var canPlaceFlowers = function (flowerbed, n) {
    let placeFlower = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        let prevoiusEmpty = i === 0 || flowerbed[i - 1] === 0
        console.log("i " + i)
        console.log("prevoiusEmpty " + prevoiusEmpty)
        let nextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0
        console.log("nextEmpty " + nextEmpty)
        if (prevoiusEmpty && nextEmpty && flowerbed[i] === 0) {
            placeFlower += 1;
            console.log("placeFlower " + placeFlower);
        }
    }
    // console.log("placeFlower " + placeFlower)
    if (placeFlower === n) {
        console.log("Answer is " + true);
        return true;
    }
    else {
       
        console.log("Answer is " + false);
        return false;
    }
};
const flowerbed = [1, 0, 0, 0, 1];
n = 2;
canPlaceFlowers(flowerbed, n);