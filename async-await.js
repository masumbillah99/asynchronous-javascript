// async function hello() {
//     return 'hello';
// }
// console.log(hello());

// async function myDisplay() {
//     let myPromise = new Promise(function (resolve, reject) {
//         resolve("I love You !!");
//     });
//     console.log(await myPromise);
// }

// // myDisplay();


// // example - 3
const paymentSuccess = true;
const marks = 90;

function enroll() {
    console.log("Course enrollment is process..!");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve();
            } else {
                reject('Payment is failed');
            }
        }, 2000);
    })

    return promise;
}

function progress() {
    console.log("Course is in progress..!");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (marks >= 80) {
                resolve();
            } else {
                reject('You could not get enough marks to get the certificate');
            }
        }, 3000);
    })

    return promise;
}

function getCertificate() {
    console.log("Preparing your certificate..!");

    const promise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve('Congrats! You got the certificate. (202)');
        }, 1000);
    })

    return promise;
}

async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

course();


/**
    example -4
 */
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

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(JSON.stringify(calendar));
    } catch {
        console.log(`Something wrong happend`);
    }
}

myMeeting();

console.log(`hello`);