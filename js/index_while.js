
// let count = 0;
// let isFast = true;
// while (count < 5) {
//     let a = 1;

//     console.log("Hello world!", count);
//     count++;
//     if (isFast && count >= 3) {
//         count = 5;
//     }
//     else {
//         count++;
//     }
// }
// const PRODUCT_AMOUNT = 6;
// const DISCOUNT_ADDITIONAL = 2;
// let discountAmount = 0;
// let productCount = 0;
// while (productCount < PRODUCT_AMOUNT && DISCOUNT_ADDITIONAL <= 10 && discountAmount <= 10) {
//     productCount++;

//     if (productCount <= 0) {
//         break;
//     }
//     if (productCount <= 3) {
//         discountAmount += 1;
//     }
//     else if (productCount > 3 && productCount <= 5) {
//         discountAmount += 1.5;
//     }
//     else if (productCount > 5 && productCount <= 8) {
//         discountAmount += 2;
//     }
//     else if (productCount > 8) {
//         discountAmount += 2.5;
//     }
//     if (DISCOUNT_ADDITIONAL) {
//         discountAmount += DISCOUNT_ADDITIONAL;
//     }

//     console.log(productCount, discountAmount)
// }
// if (discountAmount > 10) {
//     discountAmount = 10;
// }
// console.log("Sale:", discountAmount, "%")
// console.log("Sale for products:", productCount)
// console.log("Products withot sale:", PRODUCT_AMOUNT - productCount)
// let container = 5;
// let storage = 20;
// let car = 3;

// do {
//     car++;
//     storage -= container
//     console.log(car, storage)
// } while (car < 3)
// if (car > 3) {
//     console.log("The new car is needed")
// }

// let start = 40;
// let goal = 100;

// let step = 0;

// let set = 8;
// let rest = 10;
// do {

//     start++;
//     step++;
//     if (step === goal || start === goal) {
//         console.log("End of trening");
//         break;
//     }
//     if (step % set === 0) {
//         console.log(`Get a break`);
//         continue;
//     }
//     console.log("progress", step)
//     if (step === 0) {
//         console.log("Start of trening");
//     }


//     if (step % set === 0) {
//         console.log(`You made ${step / set} set`);
//     }

//     if (step === goal / 2) {
//         console.log(`You are on the middle`);
//     }




// } while (step < goal && start < goal)