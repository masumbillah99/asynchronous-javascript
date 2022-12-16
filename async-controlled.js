const takeOrder = (customer, callback) => {
    console.log(`Take order for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) => {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking completed`);
        console.log(`Order porcessed for ${customer}`);
        callback(customer);
    }, 3000);
}

const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}`);
}

takeOrder(`customer 1`, (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    })
});

console.log('hello');