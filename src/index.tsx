import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes(){
    this.namespace ='api';
    this.get('/transactions', ()=>{
      return[
        {
          id:1,
          title:'Tansaction 1',
          amount:400,
          type:'deposit',
          category:'food',
          createdAt: new Date()
        },
        {
          id:2,
          title:'Tansaction 2',
          amount:400,
          type:'withdraw',
          category:'car',
          createdAt: new Date()
        }
      ] 
    });
  }   
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);