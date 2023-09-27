// const a = 0.00000000001;
// const b = 0.2;
// const c = 0.3;
// console.log(a + b);
// const d = a + b;
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
function reviewNumber(num) {
    console.log(num)
    if (Number.isNaN(num)) {
        return console.log("Is Not a Number", num)
    }
    if (!num && num !== 0) {
        return console.log('Bad number', num)
    }
    if (!Number.isInteger(num)) {
        return console.log('partly number', num)
    }
    if (!Number.isSafeInteger(num)) {
        return console.log('dangerous number', num)
    }

    return console.log(num)
}
const a1 = 9457;
const a2 = a1.toExponential()
const a3 = parsFloat(a2);
const a4 = a3.toString(32)
console.log(a3, a4)

Number(10).toFixed().concat()
