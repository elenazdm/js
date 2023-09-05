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
// const userRole = 1;
// const adminRole = 2;
// const productStockPrice = 0;
// const defaultProductPrice = null;
// const adminPrice = false;
// const productPrice =
//     !(adminPrice ?? defaultProductPrice ?? defaultProductPrice ?? 100);
// console.log("productPrice", productPrice)
// const defaultUserName = "null";
// const ivanName = "Ivan";
// const ivanRole = userRole;
// const ivanBalance = 300;
// const result = ivanRole === adminRole && ivanBalance >= productPrice;
// const authorName = !(ivanRole === adminRole && "Admin") && "User";
// console.log("authorName", authorName);
// console.log("ivanName", ivanName);
// //===========================
// let productTitle = "null";
// productTitle ??= 'Name of goods'
// console.log("productTitle", productTitle)
// const canRead = false;
// const canWrite = true;
// const canDelete = false;
// const canEdit = true;
// let userRole = 0b0101;
// let adminRole = 0b1111;
// let user2Role = 0b0110;

// let friendRole = (userRole ^ user2Role);
// adminRole = ~adminRole;

// console.log(adminRole.toString(2));
// let freeTea = 0b00001;
// freeTea = freeTea << 1;
// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;
// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;
// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;
// console.log(freeTea >= 0b1000);

//button code with three buttons

// const a = 0b0001;
// const b = 0b0010;
// const c = 0b0100;
// let settings = 0b0000;
// settings |= a;
// // 0001
// settings |= b;
// // 0001
// //0010
// //0011
// isButtonOn = !((settings & c) === 0b0000)
// console.log(isButtonOn);

// // 0011
// //0100