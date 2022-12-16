// /**    Sequence control    */

// function display(some) {
//     console.log(some);
// }

// function calculator(num1, num2) {
//     let mult = num1 * num2;
//     return mult;
// }

// const result = calculator(5, 5);
// display(result);


// // let the calculator function call the display function (remove 7-13 line)

// function calculation(num1, num2) {
//     let sum = num1 + num2;
//     display(sum);
// }

// calculation(6, 5);


// /**
//     A callback is a function passed an argument to another function
// */

// function calculate(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum);
// }
// calculate(11, 13, display);


// // another example
// function calculate2(num1, num2, callback) {
//     let mult = num1 * num2;
//     callback(mult);
// }

// calculate2(7, 7, function (result) {
//     console.log(result);
// })


// // waiting for intervals
// setInterval(getTime, 1000);

// function getTime() {
//     let date = new Date();
//     document.getElementById("show-time").innerHTML = date.getHours() + ' : ' +
//         date.getMinutes() + ' : ' + date.getSeconds();
// }


// callback pattern
const paymentSuccess = true;
const marks = 70;

function enroll(callback) {
    console.log("course enrollment is in progress...!");

    setTimeout(() => {
        if (paymentSuccess) {
            callback();
        } else {
            console.log("Payment is failed");
        }
    }, 2000);
}

function progress(callback) {
    console.log("Course is in progress..!");

    setTimeout(() => {
        if (marks >= 80) {
            callback();
        } else {
            console.log("You could not get enough marks to get the certificate.");
        }
    }, 3000);
}

function certificate() {
    console.log("Preparing your certificate...!");

    setTimeout(() => {
        console.log("Congrats! You got the certificate.");
    }, 1000);
}

enroll(progress);
progress(certificate);