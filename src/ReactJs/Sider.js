import {Component} from 'react'
import React from 'react'
import{Menu} from 'antd'
const SubMenu =Menu.SubMenu;
class Sider extends Component {
  constructor() {
    super()
  }

  recursion(dataSource) {
    return (
      dataSource.map((menu, index) => {
        if (menu.children) {
          return (
            <SubMenu key={menu.key} title={menu.title}>
              {this.recursion(menu.children)}
            </SubMenu>
          )
        } else {
          return (<Menu.Item key={menu.key}>{menu.title}</Menu.Item>)
        }
      })
    )
  }
  render() {
    return (
      <Menu
        mode="inline"
        style={{ width: 240 }}
      >
      {
        this.recursion(this.props.data)
      }
      </Menu>
    );
  }
}



export default  Sider;