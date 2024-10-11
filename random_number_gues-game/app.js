const max = prompt("Enter the  maximum number");
console.log(max);

const random = Math.floor(Math.random() * max)+1;
// console.log(random);

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("You are a Champ! random number was", random);
        break;
    }

    else if(guess < random){
        guess = prompt("your guess number was small. please try again");
    }
    else{
        guess = prompt("your guess number was large. please try again");
    }
}