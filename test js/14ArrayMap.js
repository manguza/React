// Array Map

const data = [10,20,30,40,50]
// const result = data.map(e=>{
//     //[10,20,30,40,50]
//     console.log(`number = ${data}`);
//     const a = e * 2
//     return a
// });
const result = data.map(e => e * e);
//[10*2,20*2,30*2,40*2,50*2]
//[20,40,60,80,100]
console.log(`Array Map = ${result}`);

const data2 = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]
const result2 = data2.map((e,i) => {
    return `Colors ${i + 1}, Name ${e}`
});

console.log(result2);

const data3 = [
    {day:"01/10/2023",weather:"Hot",temp:40},
    {day:"02/10/2023",weather:"Cool",temp:10},
    {day:"03/10/2023",weather:"Rain",temp:25},
]

const result3 = data3.map(e => e.weather);
console.log(result3);





