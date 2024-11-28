import PropTypes from "prop-types";

export default function Label({title, className}) {
    const stableStyle = "font-semibold mx-4 pt-2";

    return <label title={title} className={`${stableStyle} ${className}`}
    >
        {title}
    </label>
}

Label.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
}