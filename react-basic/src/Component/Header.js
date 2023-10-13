import "./Design.css";

const Title = "บัญชีรายรับ - รายจ่าย"
const Description = "บันทึกข้อมูลของแต่ละวัน"

const Header = () => {

    return(
        <div>
            <h1 className="Title">{Title}</h1>
            <p className="Desc">{Description}</p>
        </div>
    );
}

export default Header;