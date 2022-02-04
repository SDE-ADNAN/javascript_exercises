const num1 = 37;
let temp = 0;


// loop for the condition 
//upto the point when  i is smaller than or equal to 
// num1 i.e 37 
for (let i = 1; i<=num1; i++){
    //if num1 divided by i gives remainder 0 then
    
    if(num1%i === 0){
        // do this i.e add 1 to temp variable
        temp += 1;
        // print temp variable
        console.log(temp)
    }
}

// if temp is smaller than or equal
// to 2 then num1 is prime
if (temp<=2){
    console.log(`${num1} is a prime number`)
}else{
    console.log(`${num1} is not a prime number`)
}