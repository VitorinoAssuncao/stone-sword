import React from 'react';

function Label (props,input,value){
    return (
        <label className="m-2 px-4" for={props.input}>{props.value}</label>
    );
  }


export default Label;