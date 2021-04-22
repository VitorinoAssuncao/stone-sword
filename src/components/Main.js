import React from 'react';

function Main (props){
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            {props.children}
        </main>
    );
  }


export default Main;