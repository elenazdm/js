// const user = {
//     name: 'Olga',
//     id: 45454,
//     bookId: null,
//     getPhone(book) {
//         return book[this.bookId]
//     }
// }
// const phoneBook = {

//     me: '+380564556465',
//     name: "Phone Book"

// };
// //......'
// function addToPhoneBook(phone, user) {
//     const symId = Symbol.for(user.id);
//     phoneBook[symId] = phone;
//     user.bookId = symId;


// }
// addToPhoneBook('+380564011165', user);
// addToPhoneBook('+380564556465', user);
// ////...
// // console.log(user.getPhone(phoneBook));
// // console.log(phoneBook)
// // const a = Symbol.for('1');
// // const b = Symbol.for('1');
// // console.log(a === b);
// ////=====
// const id = user.bookId;
// // console.log(Symbol.keyFor(symId))
// for (const value of [1, 5, 6]) {
//     console.log(value)
// }

let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        return this.current < this.to
            ? { done: false, value: this.current++ }
            : { done: true }
    },
};
// for (let num of range) {
//     console.log(num);
// }
const arr = [1, 5, 2, 3];
const iterator = arr[Symbol.iterator]();
result = iterator.next();
do {
    console.log(result.value);
    result = iterator.next();

} while (!result.done);