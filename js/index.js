// let n = -9999999999;
// let b = NaN ** 1;
// let c = -Infinity;
// console.log(n, b);
// console.log(1 / 0);
// const t = "hello";
// const p = "hello girls";
// const o = `test ${2 + 2}`
// console.log(o);
// let yes = true;
// let no = false;
// let isAdmin = false;
// let none;
// console.log(isFinite(n));
// console.log(typeof p);
// const a = 1 + 8 + 2;
// const c = 1 - "10";
// const d = -10;
// const e = a * c;
// let f = 10.8 % 6;
// let g = 6 % 7;
// f = g + 1;
// f += 5;
// console.log(f, g);
//operator of compare
// const personAge = 1;
// const dogAge = 0;
// console.log(underfined >= NaN);
const userRole = 1;
const adminRole = 2;
const productStockPrice = 0;
const defaultProductPrice = null;
const adminPrice = false;
const productPrice =
    !(adminPrice ?? defaultProductPrice ?? defaultProductPrice ?? 100);
console.log("productPrice", productPrice)
const defaultUserName = "null";
const ivanName = "Ivan";
const ivanRole = userRole;
const ivanBalance = 300;
const result = ivanRole === adminRole && ivanBalance >= productPrice;
const authorName = !(ivanRole === adminRole && "Admin") && "User";
console.log("authorName", authorName);
console.log("ivanName", ivanName);
//===========================
let productTitle = "null";
productTitle ??= 'Name of goods'
console.log("productTitle", productTitle)

