import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Body from "./Component/Body";
// import Transaction from "./Component/Transaction";
import './App.css';
import { useState } from "react";

function App() {

  const initData = [
    {id : 1, Date : "10/11/2023", Data : "ค่ากาแฟ", Price : "-110"},
    {id : 2, Date : "10/11/2023", Data : "ค่าข้าว", Price : "-50"},
    {id : 3, Date : "10/11/2023", Data : "ค่าเดินทาง", Price : "-100"}
  ]
  const [items, setItems] = useState(initData)
  
  const onAddNewItem = (newItem) => {
    console.log("test : ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  return (
    <div className="container">
      <Header />
      <Body onAddItem={onAddNewItem}/>
      {/* <Transaction Data = {items}/>  */}
      <Footer />
    </div>
    
  );
}

export default App;
