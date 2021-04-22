import React from 'react';

function SidebarItem (props,icon,value){
    return (
      <li className="nav-item">
        <a className="nav-link" href="cddmonitor.herokuapp.com">
        <span className={`fas fa-${props.icon}`}></span>
         {props.value}
      </a>
    </li>
    );
  }


export default SidebarItem;