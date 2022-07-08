import PropTypes from "prop-types";

const styles = {
    background: "#ff37a6",
    border: "#ffcae9",
    letterSpacing: "0.1em",
    fontWeight: "bold",
    padding: "1em",
    borderRadius: '50%'
};

const Button = ({disabled, label, color, onClick}) => {
    const customStyle = {...styles, color: color};
    return (
    <button disabled = {(disabled ? "true" : "")} onClick={onClick} style={customStyle}> 
    {label}
    </button>);
};

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
};

Button.defaultProps = {
    disabled: false,
    color: '#ff37a6'
};

export default Button;
