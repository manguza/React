// push, pop, shift, unshift
    // const data = [10,20,30]
    // data.push(...[500,1000,2000])
    // data.pop()
    // data.pop()
    // data.shift()
    // data.shift()
    // console.log(data);

    // data.unshift(999)
    // data.unshift(5000)
    // console.log(data);


// splice, slice
// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่)
// slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย-1)

const data = [10,20,30,40,50]
console.log(data);
// data.splice(1,3,999)
// data.slice(1,3) // 1,2 [20,30]
const lastdata = data.slice(1,3)
console.log(lastdata);

