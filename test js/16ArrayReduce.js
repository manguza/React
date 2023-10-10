// Array Reduce

const data = [10,20,30,40,50]

const mapData = data.map(e => 100)
const filterData = data.filter(e => e > 20)

console.log(mapData);
console.log(filterData);

// array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น)
const arrayReduce = data.reduce((val,e) => e + val, 0)
console.log(arrayReduce);