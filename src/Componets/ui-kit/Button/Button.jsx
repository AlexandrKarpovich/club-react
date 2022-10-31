import React from 'react';
import PropTypes from 'prop-types';
// import cn from 'classnames';

// styles
import '../../../style/index.css';
import './Button.scss';


/**
 * Primary UI component for user interaction
 */
export const Button = ({ light, size, label, ...props }) => {
    const mode = light ? 'button-light' : 'button-dark';
    return (
        <button
            type="button"
            className={['button', `button-${size}`, mode].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    light: PropTypes.bool,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    light: false,
    size: 'medium',
    onClick: undefined,
};
