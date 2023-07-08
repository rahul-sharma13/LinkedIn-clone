import React from 'react';
import './InputOption.css';

 function InputOption({Icon, title , color}) {                //  use of {} is important while destructuring props
  return (
    <div className='inputOption'>
        <Icon style={{color : color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption