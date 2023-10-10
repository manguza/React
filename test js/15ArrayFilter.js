// Array Filter

const data = [10,20,30,40,50]

const result = data.filter(e => e > 20)

console.log(result);


const data2 = [
    {day:"01/10/2023",weather:"Hot",temp:40},
    {day:"02/10/2023",weather:"Cool",temp:10},
    {day:"03/10/2023",weather:"Rain",temp:25},
]

const result2 = data2.filter(e => e.temp > 20)

console.log(result2);