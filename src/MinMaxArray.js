//Fin min and max of array


let input = [4, 1, 6, 8, 9, 2];

function main(data) {
    let dataLenght = data.length;
    let max = data[0];
    let min = data[0];

    for (let i = 1; i < dataLenght; i++) {

        if (max <= data[i]) {
            max = data[i];
        }
        else if (min >= data[i]) {
            min = data[i];
        }
    }
    console.log(`min is ${min}`);
    console.log(`max is ${max}`);
    return min, max;
}

console.log(`result is ${main(input)}`);