// const key = 'krgggggggggggggggey';
// const a = {
//     // amount: 100,
//     // [key]: 'Helloworld',
//     [key]: {
//         [key]: 'Ivan',
//         age: 35,
//     },

// };

// console.log(a[key]);
// console.log(a['krgggggggggggggggey']);
// console.log(a.amount);
// // const b = {};
// // console.log(b);
// delete a.amount;
// console.log(a);

// const {
//     age,
//     name,
//     address: { city, street, zipcode = "014546" },
//     ...rest
// } = person;
// console.log(age, name, city, street, zipcode);
// console.log(rest);
const person = {
    name: 'Ivan',
    age: 25,
    occupation: 'Developer',
    address: {
        city: 'Kyiv',
        // street: 'Sreet Shevchenko',
        housenNmber: 10,
        zipcode: "014546",

    },
};
function getAddress({ address }) {
    if (address) {
        const {
            city,
            street = "no info",
            houseNumber,
            zipcode = 1000 } = address;
        return `Your address: ${city}, ${street}, ${houseNumber}, ${zipcode}`
    }
    return `No data`;



}

const test = getAddress({ city: 'Dnipro' });
console.log(test);
// for (const key in person) {
//     const item = person[key]

//     if (typeof item === "object") {
//         for (const key2 in item) {
//             console.log(item[key2]);
//         }

//     } else {
//         console.log(item);
//     }

// }
// const a = { test: 1 };
// const b = { test: 1 };
// console.log(a === b)