// loops are used to execute a piece of code again and again

for (let count=1;count<=10;count++){
    console.log("apna college")
}

console.log("loop has ended");


// sum of 1-n
sum=0;
let n=10;
for(let i=1; i<=n;i++){
    
    sum=sum+i;
}
console.log("sum=",sum);


 // print 1 to 5
for (let i=1;i<=5; i++){
        console.log("i =",i);
    }
    
    console.log("loop has ended");




// WHILE LOOP
let p=3;
while(p<=6){
    console.log("p=",p);
    p++
}



// do while loop

let r=1;
do{
    console.log("mim");
    r++;
} while(r<=5);



// 1 time will be print
let t=10;
do{
    console.log("mim");
    t++;
} while(t<=5);





// for off loop

let str="razowana";
let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}
console.log("string size=",size);



//for-in-loop

let teacher={
    name:"nazrul",
    age:52,
    home:"jashore",
    ispass:true
};

for(let key in teacher){
    console.log("key=",key,"value=",teacher[key]);
}