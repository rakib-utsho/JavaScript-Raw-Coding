// practice 1
function printPome() {
    console.log(" Twinkle, twinkle, little Star, \n How I wonder what you are! \n Up above the world so high, \n Like a diamond in the sky. \n When the blazing sun is gone, \n When he nothing shines upon, \n Then you show your little light, \n Twinkle, twinkle, all the night.");
    console.log("\n");
}
printPome();

// complex logic function 
function diceRoll() {
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
}

diceRoll();
diceRoll();
diceRoll();
diceRoll();

console.log("\n");

// Function with Argument

function calcAvg(a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
};

calcAvg()

console.log("\n");
//number table table 
function printTable(n) {
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

printTable();


// Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [8,9,10,1,2,3,4,5,6,7];
let num = 5;

function getElement(arr, num){
    for (let i=0; i<arr.length;i++){
        if (arr[i]>num){
            console.log(arr[i]);
        }
    }
}

getElement(arr,num);

// Qs2. Write a JavaScript function to extract unique characters from a string. Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = "abcdabcdefgggh";
//function to get String with all unique elements
function getUnique(str) {
    let ans = "";

    for(let i = 0; i<str.length; i++){
        let currChar = str[i];
        if (ans.indexOf(currChar)==-1){
        //if current character is not added, then add it in ans.
//Otherwise it is a duplicate. 
            ans+=currChar;
        }
    }
    return ans;
}
getUnique(str);
