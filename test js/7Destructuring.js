// Destructuring

// Array
    // const colors = ["แดง","น้ำเงิน","เขียว"]
    // const red = colors[0]
    // const blue = colors[1]
    // const green = colors[2]
    // const [red,blue,green] = colors
    // console.log(red);
    // console.log(blue);
    // console.log(green);
const product = {
    productName : "คอมพิวเตอร์",
    price : 30000,
    stock : 10
}

// const productname = product.productName
// const price = product.price
// const stock = product.stock

// const {productName:productName, price:price, stock:stock} = product
// console.log(productName)
// console.log(price)
// console.log(stock)

const {productName:n, price:p, stock:s} = product

console.log(n)
console.log(p)
console.log(s)
