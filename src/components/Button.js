import React from 'react';

function Button (props,color,type,click,value){
    return (
        <button className={`btn btn-${props.color} btn-lg  m-2`} type={props.type} onClick={props.click}>{props.value}</button>
    );
  }


export default Button;