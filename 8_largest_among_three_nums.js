const n1= 287
const n2 = 2387
const n3 = 323
let largest


if(n1>=n2&&n1>=n3){
    largest=n1
}else if(n2>=n1&&n2>=n3){
    largest=n2
}else{
    largest=n3
}

console.log('The largest number is :'+largest)