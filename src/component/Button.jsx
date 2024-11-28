import PropTypes from "prop-types";

export default function Button({children, onClick, className, style}) {
    const baseStyle = "bg-white rounded-md text-center m-auto mx-2 w-8 h-8"
    return <button onClick={onClick} className={`${baseStyle} ${className}`} style={style} >{children}</button>;
}
Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className:PropTypes.string,
    style: PropTypes.object,
}