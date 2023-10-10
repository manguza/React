// การ Loop Array
// For Loop, ForEach, ForOf

const data = [10,20,30,40,50]

// for(let i = 0; i < data.length; i++){
//     if (data[i] >= 30) break
//     console.log(`ลำดับที่ ${i} = ${data[i]}`);
// }

// let sum = 0
// data.forEach(e => {
//     if(e>=30){
//         console.log("hi!");
//     }
//     console.log(`ลำดับที่ ${e}`);
//     sum += e
//     console.log(`ผลรวม = ${sum}`);
// });
    
for (const e of data){
    if (e >= 30) break
    console.log(`ลำดับที่ ${e}`);
}

