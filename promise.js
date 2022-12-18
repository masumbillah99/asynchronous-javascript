// // example - 1
// const status = false;

// console.log('Task 1');

// // producing code
// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (status) {
//             resolve('Task 2');
//         } else {
//             reject('failed');
//         }
//     }, 2000);
// })

// // consuming code
// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

// console.log('Task 3');



// // another example - 2
// // producing code
// const paymentSuccess = true;
// const marks = 90;

// function enroll() {
//     console.log("Course enrollment is process..!");

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (paymentSuccess) {
//                 resolve();
//             } else {
//                 reject('Payment is failed');
//             }
//         }, 2000);
//     })

//     return promise;
// }

// function progress() {
//     console.log("Course is in progress..!");

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (marks >= 80) {
//                 resolve();
//             } else {
//                 reject('You could not get enough marks to get the certificate');
//             }
//         }, 3000);
//     })

//     return promise;
// }

// function getCertificate() {
//     console.log("Preparing your certificate..!");

//     const promise = new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve('Congrats! You got the certificate. (202)')
//         }, 1000);
//     })

//     return promise;
// }

// // consuming code
// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })



// example -3
const hasMetting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMetting) {
        const meetingDetails = {
            subject: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        };
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already scheduled'));
    }
});

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.subject} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
};


// meeting
//     .then(addToCalendar)
//     .then((res) => {                            // resolved data
//         console.log(res);
//     })
//     .catch((err) => {                           // rejected data
//         console.log(err.message);
//     });

// console.log('hello');



/** 
  যখন আমরা চাইবো আমাদের মাল্টিপল প্রমিজ একসাথে এক্সিকিউশন শুরু করবে এবং তাদের রেজাল্ট একবারে
  আসবে, এবং সেই রেজাল্ট দিয়ে কিছু একটা করবো তাহলে আমরা Promise.all ব্যবহার করতে পারি।
*/

const promise1 = Promise.resolve(`Promise 1 resolved`);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
})

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

Promise.all([promise1, promise2])
    .then((res) => {
        console.log(res);
    })


/**     .all -- .race     */

const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Prom1 resolved..`);
    }, 2000);
})
const prom2 = Promise.resolve('Prom2 resolved..');

Promise.all([prom1, prom2])
    .then((res) => console.log(res));
Promise.race([prom1, prom2])
    .then((res) => console.log(res));