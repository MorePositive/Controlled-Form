import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {

  render() {
    
    const { data } = this.props;

    return (
      <div className="item-list">
        { 
          !data.length 
             ?  <p className="no-data">There is no data yet</p>
             :  data.map(item => {
                return (
                  <div  className="item" 
                        key={item.email || item.id}>

                    <p>{item.firstName || item.userId}</p>
                    <p>{item.lastName || item.id}</p>
                    <p>{item.phone || item.title}</p>
                    <p>{item.email || item.body}</p>

                  </div>
                )
              })
        }
      </div>
    )
  }
}