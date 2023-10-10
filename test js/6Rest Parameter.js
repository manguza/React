//Rest Parameter

// summation = (x,y) => {
//     return x + y
// }

// summation = (x,y,z) => {
//     return x + y + z
// }

// summation = (x,y,z,w) => {
//     return x + y + z + w
// }

summation = (...numberArr) => {
    let total = 0
    for(let number of numberArr) total += number //0+500+100
    return total
}

// console.log(summation(50,100));
// console.log(summation(500,1000,500,400));
console.log(summation(500,1000));
console.log(summation(500,1000,800));
console.log(summation(500,1000,800,500));
console.log(summation(500,1000,800,500,1000));