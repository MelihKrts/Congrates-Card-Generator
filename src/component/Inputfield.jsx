import PropTypes from "prop-types";

export default function Inputfield({className, min, max, type, value, onChange, placeholder}) {
    const stableStyle = " outline-0 border rounded-sm border-gray-200 px-1 py-1"
    return <input type={type} className={`${stableStyle} ${className}`} value={value} onChange={onChange} placeholder={placeholder} min={min} max={max}/>
}
Inputfield.propTypes = {
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

}