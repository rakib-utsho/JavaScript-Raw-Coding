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
let numb = 0;
const isEven = (numb) => numb%2 == 0;

// multiple of 10

let numss = [10, 20, 30, 40, 50, 60, 70];


let ans = numss.every((el)=>el%10==0);

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


// prac 8 q1

let numa = [1, 2, 3, 4, 5];

const square = numa.map((numa) => numa*numa);
console.log(square); 

let sum = square.reduce((acc, cur) => acc+cur, 0);
console.log(sum);

let avg = sum/numa.length;
console.log(avg);


// prac 8 q2

let numArr = [2, 4, 6, 8, -1, -4];
console.log(numArr.map((numArr) => numArr +5));

// prac 8 q3

let str = ["sohan", "naime", "shahadat", "najmul", "sabbir"];
console.log(str.map((str)=>str.toUpperCase()));

