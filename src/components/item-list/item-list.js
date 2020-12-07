import React from 'react';

import './item-list.css';

const ItemList = ({data}) => {

  return (
    <div className="item-list">
      { 
        !data.length 
          ?  <p className="no-data">There is no data yet</p>
          :  data.map(({firstName, lastName, phone, email, id, userId, title, body}) => {
              return (
                <ul  className="card" 
                      key={email || id}>
                  <li className="card-item">{firstName || userId}</li>
                  <li className="card-item">{lastName || id}</li>
                  <li className="card-item">{phone || title}</li>
                  <li className="card-item">{email || body}</li>
                </ul>
                )
              })
      }
    </div>
  )
}

export default ItemList;
