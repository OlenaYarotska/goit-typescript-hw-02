import React from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage : React.FC= () => {
    return (
    <div className={css.text}>Something went wrong. Please try again later!</div>
)
}

export default ErrorMessage;