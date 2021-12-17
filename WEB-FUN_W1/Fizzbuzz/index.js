for (let i = 1; i <= 100; i++) {

    if (1 % 3 == 0 && i % 5 == 0) {
        console.log( "FissBuzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
    
}
