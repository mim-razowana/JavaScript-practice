// operatos are used to perform some operations
// Artimetic operations
// let a=5;
// let b=2;
// console.log("a = ",a," & b = ",b);
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b); //5^2
// console.log("Addtion of "+a+" and "+b+" is", a+b);


// unary operatr
// let a=5;
// let b=2;
// console.log("a = ",a," & b = ",b);
// a++ //6
// console.log("a=",a);
// a--
// console.log("a=",a);

// let a=5;
// let b=2;
// console.log("a = ",a," & b = ",b);

// console.log("++a=",++a); //6

// console.log("a++=",a++);//6
// console.log("a=",a);//7


//Assign operators:assign vaalues =,+=,-=,*=,%=,**=

let a=5;
let b=2;
console.log("a = ",a," & b = ",b);
a+=4;
console.log("a=",a);
a-=4;
console.log("a=",a);
a*=4;
console.log("a=",a);
a%=3
console.log("a=",a);
a**=3;
console.log("a=",a);

// comparison operators
let c = 6;
let d = "6";
console.log("c===d",c===d);
console.log("c==d",c==d);
console.log("c!==d",c!==d);
console.log("c!=d",c!=d);
console.log("c>d",c>d);
console.log("c>=d",c>=d);
console.log("c<d",c<d);
console.log("c<=d",c<=d);

//logical operators

e =  3;
f = 2 ;
let cond1 = e>f;
let cond2 = e===f;
console.log("cond1 && cond2 =",cond1&&cond2);
console.log("cond1 || cond2 =",cond1||cond2);
console.log("!cond1 || cond2 =",!cond1&&cond2);

// ternary operator
//operate on 3 operands(there will be 1 condition and 2 output)

let mark=30;
let result = mark>=33 ? "pass" : "fail";
console.log(result);

let mark2=50;
 mark2>=33 ? console.log("pass") : console.log("fail");
