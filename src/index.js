import React from 'react';
import ReactDOM from 'react-dom';
import Page from './ReactJs/Page'
import NavBar from './ReactJs/NavBar'
import Login from './ReactJs/Login'
import './index.css';
import 'antd/dist/antd.css';

var menuData = [{
    itemKey: 123,
    itemVal:123
}, {
    itemKey: 456,
    itemVal:356
}]

ReactDOM.render(
  <div>
    <NavBar MenuData = { menuData }/>, 
    <Login/>,
  </div>,
    document.getElementById('root')
  
);