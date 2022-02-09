var temp = 0;

for(j=1;j<=100;j++){

    for(var i=1;i<=j;j++){
        if(j%i==0){
            temp+=1
        }
    }
    if(temp<=2){
        console.log(`${j} is prime number `)
    }

    temp = 0
}