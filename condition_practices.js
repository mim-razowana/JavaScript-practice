//get user to input number using promt("enter a number:").check the number is multiple of 5 or not.
// let n = prompt("enter a number:")

// if (n%5===0){
//     console.log(n," is multiple of 5.");
// }else{
//     console.log(n," is not a multiple of 5.");
// }

//write a code which can give grades to students according to their scores:

let marks = prompt("Enter your mark (0-100):")
let grade;
if (marks>=90 && marks<=100){
    grade="A";
}else if (marks>=70 && marks<=89){
    grade="B";;
}else if (marks>=60 && marks<=69){
    grade="C";;
}else if (marks>=50 && marks<=59){
    grade="D";;
}else if (marks>=0 && marks<=49){
    grade="F";;
}else {
    grade="not valid";
}

console.log("Accoding to your mark ,your grade is: ",grade);