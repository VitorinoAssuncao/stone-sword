import React from 'react';

function Form (props){
    return (
        <form className="card bg-light p-2 m-1">
            {props.children}
        </form>
    );
  }


export default Form;