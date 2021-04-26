import React from 'react';

export function sendFavorite(user_id,marvel_id,type){
    const requestOptions = {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
            marvel_id:marvel_id,
            user_id:user_id
            }
            )
    }

        if (type==='character'){
        fetch(`https://stone-shield.herokuapp.com/users/${user_id}/characthers`, requestOptions)
        .then(res => res.json())
        .then(res  => console.log(res))
        .then(window.location.reload());
      }
      else {
        fetch(`https://stone-shield.herokuapp.com/users/${user_id}/comics`, requestOptions)
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res  => console.log(res))
        .then(window.location.reload());
      }
    }

    export function removeFavorite(item_id,type){
      const requestOptions = {
          method : 'DELETE'
      }
  
          if (type==='character'){
          fetch(`https://stone-shield.herokuapp.com/characther/${item_id}`, requestOptions)
          .then(res => res.json())
          .then(res  => console.log(res))
          .then(window.location.reload());
        }
        else {
          fetch(`https://stone-shield.herokuapp.com/comic/${item_id}`, requestOptions)
          .then(res => res.json())
          .then(res  => console.log(res))
          .then(window.location.reload());
        }
      }

function FavoriteButton (props,color,type,click,value){
    return (
        <button className={`btn btn-outline-${props.color}`} type={props.type} onClick={props.click}>{props.value}</button>
    );
  }


export default FavoriteButton;