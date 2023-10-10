//Spread Operator

// const newArr = [100,200,300]
// const data = [10,20,...newArr]
// console.log(data);

const colors = ["green","blue","red"]
const allColors = ["yellow","purple",...colors]
const newColors = ["black","gray"]

allColors.push(...newColors)

console.log(allColors);
