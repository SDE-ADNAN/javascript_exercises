//defining function
function hello(){
    //greet variable is a local variable
    // which means it cannot be used outside hello i.e hello
    //function
    var greet="Hello, how are u today";
    console.log(greet);
}

hello()

//Error 
console.log(greet)
