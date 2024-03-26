// EXAMPLE 1:
// print all even numbers 0-100


for(let i=1;i<=10;i+=2){
    console.log("i=",i);
}

//with if 
for(let i=1;i<=10;i++){
    if(i%2 !==0){
        console.log(i);
    }
}

//while loop
let n1=1;
while(n1<=10){
    if(n1%2!==0){
        console.log("n=",n1);
    }
    n1++;
}

//do while loop
let k=1;
do{
    if(k%2!==0){
        console.log("k=",k);
    }
    k++;
}while(k<=10);


// EXAMPLE2:
// create a gamenumber ,where yoy start with any ramdom gamenumber.ask the user to keep gussing the game number untill the user enter the right number

let gamenum=25;
let usernum=prompt("Enter a gamenumber (0-100):");

while(usernum!=gamenum){
    usernum=prompt("you enter a wrong number,guess another game number:");
}
console.log("Congratulation!You enter the right number");