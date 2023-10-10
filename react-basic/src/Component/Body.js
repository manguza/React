import "./Design.css";

function Body(){
    return(
        <div className="Row">
            <div className="Column">
                <p className="Desc">Pruk Homnan</p>
                <label for="DatePruk">วันที่ : </label>
                <input type="date" id="DatePruk" name="DatePruk"></input><br></br>
                <label for="GetPruk">รายรับ : </label>
                <input type="number" id="GetPruk" name="GetPruk"></input>
                <input type="button" id="PlusPruk" name="PlusPruk" value="+"></input><br></br>
                <label for="OutPruk">รายจ่าย : </label>
                <input type="number" id="OutPruk" name="OutPruk"></input>
                <input type="button" id="NePruk" name="NePruk" value="-"></input><br></br>
                <input type="submit" value="Submit"></input>
            </div>
            <div className="Column">
                <p className="Desc">Wanichya Inpeng</p>
                <label for="DateWa">วันที่ : </label>
                <input type="date" id="DateWa" name="DateWa"></input><br></br>
                <label for="GetWa">รายรับ : </label>
                <input type="number" id="GetWa" name="GetWa"></input>
                <input type="button" id="PlusWa" name="PlusWa" value="+"></input><br></br>
                <label for="OutWa">รายจ่าย : </label>
                <input type="number" id="OutWa" name="OutWa"></input>
                <input type="button" id="NeWa" name="NeWa" value="-"></input><br></br>
                <input type="submit" value="Submit"></input>
            </div>
        </div>
    );
}

export default Body;