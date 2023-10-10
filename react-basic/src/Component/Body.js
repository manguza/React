import { useState } from 'react'
import "./Design.css";

const Body = () => {

    const [Date, setDate] = useState('');
    const [Data, setData] = useState('');
    const [Price, setPrice] = useState(0);

    const inputDatePruk = (event) =>{
        setDate(event.target.value);
        console.log(event.target.value);
    };

    const inputDataPruk = (event) =>{
        setData(event.target.value);
        console.log(event.target.value);
    };

    const inputPricePruk = (event) =>{
        setPrice(event.target.value);
        console.log(event.target.value);
    };  

    const saveDataPruk = (event) =>{
        event.preventDefault();
        const allData = {
            Date : Date,
            Data : Data,
            Price : Number(Price)
        }
        console.log(allData);
        setDate('');
        setData('');
        setPrice(0);
    }

    const inputDateWa = (event) =>{
        console.log(event.target.value);
    }

    const inputDataWa = (event) =>{
        console.log(event.target.value);
    }

    const inputPriceWa = (event) =>{
        console.log(event.target.value);
    }

    const saveDataWa = (event) =>{
        // event.preventDefault();
        console.log("บันทึกข้อมูล");
    }
    
    return(
        <div className="Row">
            <form onSubmit={saveDataPruk}>
                <div className="Column">
                    <p className="Desc">Pruk Homnan</p>
                        <label>วันที่ : </label>
                        <input type="date" onChange={inputDatePruk} value={Date}/>

                        <label>ขื่อรายการ : </label>
                        <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputDataPruk} value={Data}/>
                   
                        <label>จำนวนเงิน : </label>
                        <input type="number" placeholder="(- รายจ่าย / + รายรับ)" onChange={inputPricePruk} value={Price}/>
                    
                        <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
            <form onSubmit={saveDataWa}>
                <div className="Column">
                    <p className="Desc">Wanichya Inpeng</p>
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