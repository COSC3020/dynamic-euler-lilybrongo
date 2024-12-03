/*
initial code
function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}
*/

function e(n) {
    //initializing sum to be 0, while creating a place for the total approximation
    let sum = 0;
    //initializing factorial to be 1 since 0! = 1
    let factorial = 1;

    //looping through from 0 to n
    //this will calculate each term in the series for the needed approximation
    //if i is greater than 0, then we need to update and then multiply the current factorial
    //by i in order to get th new factorial
    for (let i = 0; i <= n; i++) {
        if (i > 0) {
            factorial *= i;
        }
        //then we need to add the current to the sum
        //in order to get the current sum we need to to follow eulers formula 
        //and divide 1 by factorial 
        sum += (1.0 / factorial);
    }
//sum at this point will contain the approximation of e up to n terms, so we return the total sum
return sum;
}
