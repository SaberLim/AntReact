import React from 'react'
import{Menu} from 'antd'
import {Component} from 'react'
const SubMenu =Menu.SubMenu;
const MenuItem=Menu.Item;


class NavBar extends Component{
     state = {
     current: '1',
     }
    getMenuItem(MenuData)
    {
         return(
             MenuData.map(function(m){
                 return(<MenuItem key={m.itemKey} >{m.itemVal}</MenuItem>)
             })
         )   
    }
    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
        this.props.onChangeIndexHandle(e.key);
    }
    render(){
        return(
            <Menu  onClick={this.handleClick}  mode='horizontal'  selectedKeys={[this.state.current]}>
                 {this.getMenuItem(this.props.MenuData)}
            </Menu>
        )
    }
}


export default NavBar;