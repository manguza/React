// ค้นหาข้อมูลใน Array
// indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าไม่เจอจะได้ -1
// find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าไม่เจอจะได้ undefined
// findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าไม่เจอจะ -1

const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]

const a = colors.indexOf("ขาว")
const b = colors.find(e => e === "ขาว")
const c = colors.findIndex(e => e === "ขาว")

console.log(colors);
console.log(a);
console.log(b);
console.log(c);