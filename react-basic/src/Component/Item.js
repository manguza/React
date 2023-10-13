import PropTypes from 'prop-types';
import "./Design.css";

const Item = (props) => {

    const {Date,Data,Price} = props
    const status = Price < 0 ? "expense" : "income"
    const symbol = Price < 0 ? "-" : "+"
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <li className={status}><p>{Date}</p> {Data} <span>{symbol}{formatNumber(Math.abs(Price).toFixed(2))}</span></li>
    );
}

Item.propTypes = {
    Date : PropTypes.string.isRequired,
    Data : PropTypes.string.isRequired,
    Price : PropTypes.number.isRequired
}

export default Item