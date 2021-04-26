import React from 'react';
import { Link } from 'react-router-dom'

function SidebarItem (props,icon,link,value){
    return (
      <li className="nav-item">
        <Link className="nav-link" to={props.link}>
        <span className={`fas fa-${props.icon}`}></span>
         {props.value}
      </Link>
    </li>
    );
  }


export default SidebarItem;