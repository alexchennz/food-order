import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.id}>{props.label}</label>
        <input ref={ref} {...props.input} onChange={props.onChange}/>
    </div>
  )
})

export default Input