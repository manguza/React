// ทำงานกับ Object

// ตัวแปรเก็บข้อมูล
const username = "pruk"
const age = 25
const address = "Bangkok"

// const customer = {
//     customerName : "pruk",
//     age : 27,
//     address : "Bangkok"
// }

// const customer = {
//     customerName : username,
//     age : age,
//     address : address
// }

const customer = {
    username,
    age,
    address,
    showData(){
        console.log("Customer Name is " + username);
    }
}

// console.log(customer);
customer.showData()