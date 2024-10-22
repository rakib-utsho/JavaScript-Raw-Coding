// Part 7 Q1
const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr){
        total += number;
        console.log(total);
    }

    return total/arr.length;
};
let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));