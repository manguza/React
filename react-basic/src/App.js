import Header from "./Component/Header";
import Report from "./Component/Report";
import Footer from "./Component/Footer";
import Body from "./Component/Body";
import Transaction from "./Component/Transaction";
import DataContext from "./Data/DataContext";
import './App.css';
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {

  const [items, setItems] = useState([])
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  
  const onAddNewItem = (newItem) => {
    console.log("test : ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => {
    const allPrice = items.map(items => items.Price)
    const income = allPrice.filter(e => e > 0).reduce((total,e) => total += e,0)
    const expense = (allPrice.filter(e => e < 0).reduce((total,e) => total += e,0)) * -1
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  }, [items,reportIncome,reportExpense])

  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state, action) => {
  //   switch(action.type){
  //     case "SHOW" :
  //       return setShowReport(true)
  //     case "HIDE" :
  //       return setShowReport(false)
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport)

  return (
    <DataContext.Provider value={{income : reportIncome, expense : reportExpense}}>
      <div className="container">
        <Header />
        <Router> 
        <div>
          <ul className="horizontal-menu">
            <li>
              <Link to="/">ข้อมูลบัญชี</Link>
            </li>
            <li>
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={[<Report />, <Footer />]} />
            <Route path="/insert" element={[<Body onAddItem={onAddNewItem}/>, <Transaction items = {items}/>, <Footer />]}/>
          </Routes>
        </div>
        </Router>
        {/* <div align="center">
          <h1>{result}</h1>
          <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
          <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
        </div> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
