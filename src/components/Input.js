import React from 'react';

function Input (props,type,handler,name){
    return (
        <input className="form-control" onChange={props.handler} type={props.type} id={props.name}/>
    );
  }

export default Input;