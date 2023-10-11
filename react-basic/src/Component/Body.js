import { useState } from 'react'
import "./Design.css";
import { v4 as uuidv4 } from 'uuid';

const Body = (props) => {

    const [Date, setDate] = useState('')
    const [Data, setData] = useState('')
    const [Price, setPrice] = useState(0)

    const inputDatePruk = (event) =>{
        setDate(event.target.value)
        console.log(event.target.value)
    };

    const inputDataPruk = (event) =>{
        setData(event.target.value)
        console.log(event.target.value)
    };

    const inputPricePruk = (event) =>{
        setPrice(event.target.value)
        console.log(event.target.value)
    };  

    const saveDataPruk = (event) =>{
        event.preventDefault()
        const allData = {
            id : uuidv4(),
            Date : Date,
            Data : Data,
            Price : Number(Price)
        }
        props.onAddItem(allData)
        setDate('')
        setData('')
        setPrice(0)
    }

    const inputDateWa = (event) =>{
        setDate(event.target.value)
        console.log(event.target.value)
    }

    const inputDataWa = (event) =>{
        setData(event.target.value)
        console.log(event.target.value)
    }

    const inputPriceWa = (event) =>{
        setPrice(event.target.value)
        console.log(event.target.value)
    }

    const saveDataWa = (event) =>{
        event.preventDefault()
        const allData = {
            id : uuidv4(),
            Date : Date,
            Data : Data,
            Price : Number(Price)
        }
        props.onAddItem(allData)
        setDate('')
        setData('')
        setPrice(0)
    }
    
    return(
        <div className="Row">
            <form onSubmit={saveDataPruk}>
                <div className="Column">
                    <p className="Desc">พฤกษ์ หอมนาน</p>
                        <label>วันที่ : </label>
                        <input type="date" onChange={inputDatePruk} />

                        <label>ขื่อรายการ : </label>
                        <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputDataPruk} />
                   
                        <label>จำนวนเงิน : </label>
                        <input type="number" placeholder="(- รายจ่าย / + รายรับ)" onChange={inputPricePruk} />
                    
                        <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
            <form onSubmit={saveDataWa}>
                <div className="Column">
                    <p className="Desc">วนิชยา อินทร์เพ็ง</p>
                        <label>วันที่ : </label>
                        <input type="date" onChange={inputDateWa}/>

                        <label>ขื่อรายการ : </label>
                        <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputDataWa}/>
                   
                        <label>จำนวนเงิน : </label>
                        <input type="number" placeholder="(- รายจ่าย / + รายรับ)" onChange={inputPriceWa}/>
                    
                        <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    );
}

export default Body;