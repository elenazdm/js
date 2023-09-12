

// let q = 0;
// main: for (let i = 0, j = 5; i <= j; i++) {
//     console.log("Test", i, j)

//     if (i === 3) {
//         j++;
//     }
//     for (; ; q++) {
//         console.log("0", q)
//         if (q >= i) {
//             break main;
//         }
//     }
// }

// let age = 25;
// let hasExp = false;
// let hasEdu = true;
// let JS = true;
// let HTML = true;
// let result = null;


// form: {
//     if (age >= 18) {
//         if (hasExp) {
//             console.log(`You can apply`)
//             break form;
//             if (JS) {
//                 console.log(`You can apply`)
//             }
//             if (HTML) {
//                 console.log(`You can apply`)
//             }
//         }

//         if (hasEdu) {
//             console.log(`You can apply`)
//             break form;
//         }


//     }
//     if (age < 18) {
//         console.log("You can't apply. You are too yong")
//         result = false;
//     }
// }
table: for (let i = 1; i < 10; i++) {
    if (i === 1) {
        continue;
    }
    console.log(`Number ${i}==============================`)
    for (let j = 2; j < 10; j++) {
        if (j === 1) {
            continue;
        }
        console.log(`${i} * ${j} = ${i * j}`);

    }
}