import React from 'react';

function Label (props,input,value){
    return (
        <label className="form-label"  for={props.input}>{props.value}</label>
    );
  }


export default Label;