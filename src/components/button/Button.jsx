import React from 'react';
import './Button.scss';

const Button = ({text, color = "rgb(255, 134, 22)", submit = false}) => {
    const Button = submit == true ? <button style={{backgroundColor:color}} className="btn" type="submit">{text}</button>
                    : <button style={{backgroundColor:color}}className="btn">{text}</button>
    return (
        <>
            {Button}
        </>
    );
}

export default Button;