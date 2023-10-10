// Default Parameter
getDataCustomer = (customerName,customerAddress) => {

    if(!customerAddress){
        customerAddress = "กรุงเทพมหานคร"
    }

    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`
    return address
}

console.log(getDataCustomer("พฤกษ์ หอมนาน","1/371"));
console.log(getDataCustomer("พฤกษ์ หอมนาน"));