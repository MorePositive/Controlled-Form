import React, { Component } from 'react';

import Form from '../form/form';
import ItemList from '../item-list/item-list'

import './app.css';

export default class App extends Component {

  state = {
    data: []
  }

  // simple counter to make different dummy requests 
  count = 1;

  // request to server 
  getPost = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.count++}`)
      .then(response => response.json())
      .then(post => this.setData(post))
      .catch(error => {
        throw new Error(error);
      })
  };

  // putting new item to the state
  setData = (newItem) => {
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  };

  // creating item template
  createItem = (firstName, lastName, phone, email) => {
    return {
      firstName,
      lastName,
      phone,
      email
    }
  };

  // proccesing data from inputs & adding a new item
  addItem = (...incomeData) => {
    const newItem = this.createItem(...incomeData);
    this.setData(newItem);
  };

  // reset data
  clearData = () => {
    this.setState({data: []});
  };

  render() {

    const { data } = this.state;

    return (
      <div className="App">
       <Form  onItemAdded={this.addItem}
              clearData={this.clearData}
              getPost={this.getPost}/>
       <ItemList data={data}/>
      </div>
    );
  }
}
