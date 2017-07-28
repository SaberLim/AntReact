import React from 'react'
import {Component} from 'react'
import {Menu} from 'antd'
const SubMenu =Menu.SubMenu;

class MenuNav extends Component {
 /* constructor() {
    super()
  }
*/

  getItem(dataSource) {
    return (
      dataSource.map((menu) => {
        if (menu.children) {
          return (
            <SubMenu key={menu.key} title={menu.title}>
              {this.getItem(menu.children)}
            </SubMenu>
          )
        } else {
          return (<Menu.Item key={menu.key}>{menu.title}</Menu.Item>)
        }
      })
    )
  }
   handleClick = (e) => {
     console.log('click ', e);
     this.props.onChangeMenuIndexHandle(e.key);
  }
  render() {
    return (
        <div style={{ width:'100%' }}>
            <Menu onClick={this.handleClick}
                mode="inline"
                style={{ width: 240, float:'left', height: document.body.clientHeight  }}
            >
            {
                this.getItem(this.props.data)
            }
            </Menu>
      </div>
    );
  }
}


export default MenuNav;