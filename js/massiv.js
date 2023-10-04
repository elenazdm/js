// const a = 1;
// const b = 2;
// const c = 3;
// const d = 4;
// let list = [() => [{}]];

// const testArr = Array(5);

// testArr[0] = "start";
// testArr[1] = 2;
// testArr[10] = 2;
// testArr[testArr.length] = 30;
// testArr["test2"] = "Test123";
// delete testArr[1];
// console.log(testArr)
// const big = [[[1]]];
// console.log(big[0][0]);
const location = [
    [100, 200],
    [102, 205],
    [107, 305]];
// const loc1 = location[0];
// const loc2 = location[1];
// console.log(loc1, loc2)
const [a, ...rest] = location;
const [[p1, p2], loc3, loc4 = 'test'] = rest
// console.log(p1, p2)
// for (const pointIndex in location) {
//     console.log(location[pointIndex]);
//     for (const coordIndex in location[pointIndex])
//         console.log(location[pointIndex][coordIndex]);
// }
// for (let i = 0; i < location.length; i++) {
//     console.log(location[i]);
//     for (let j = 0; j < location[i].length; j++) {
//         console.log(location[i][j])
//     }
// }
// let l1 = [2, 3, 1];
// let l2 = [1, 2, 3];
// const l3 = [100, ...(l1 || [])];
// console.log(l1.toString() == l2.toString());
// console.log(l1, l3);
// delete l1[0];
// console.log(l1, l3);
// [l1, l2] = [l2, l1];
// console.log(l1, l2);
function printFullname([name, surname, lastname, ...arg]) {
    // console.log(arg);
    // return arg.toString()
    return ` ${name} ${surname} ${lastname} ${arg.length ? `(${arg.toString()})` : ""}`;
}
console.log(printFullname("Ivan", "Ivanenko", "Ivanov", "Admin"));
// function sumAllNum(...nums) {
//     let sum = 0;
//     for (const n of nums) {
//         sum += n;
//     }
//     return [sum, nums.length];
// }
// const [sum, numLength] =
//     sumAllNum(1, 2, 3, 5, 5, 4, 54, 54, 545, 5);
// console.log(sum, numLength)
