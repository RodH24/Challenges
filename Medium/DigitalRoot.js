function digitalRoot(n) {
    while (n >= 10) {
        n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
}

//Test the function
const number = 12345;
const result = digitalRoot(number);
console.log(`The digital root of ${number} is ${result}.`);