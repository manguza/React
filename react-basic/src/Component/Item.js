import PropTypes from 'prop-types';
import "./Design.css";

const Item = (props) => {

    const {Date,Data,Price} = props
    const status = Price < 0 ? "expense" : "income"

    return (
        <li className={status}>{Date} {Data} <span>{Price}</span></li>
    );
}

Item.propTypes = {
    Date : PropTypes.string.isRequired,
    Data : PropTypes.string.isRequired,
    Price : PropTypes.number.isRequired
}

export default Item