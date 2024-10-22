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

// Part 7 Q2
let num = 0;
const isEven = (num) => num%2 == 0;

// multiple of 10

let nums = [10, 20, 30, 40, 50, 60, 70];


let ans = nums.every((el)=>el%10==0);

console.log(ans);

// min number of array

let nums = [10, 20, 30, 40, 50, 60, 7, 40, 2, 50, 1, 100];

function getMin(nums){
    let min = nums.reduce((min, el) => {
        if (el>min){
            return min;
        }else{
            return el;
        }
    });
    return min;
};


