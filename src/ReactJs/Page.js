import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import MenuNav from './MenuNav'


var MenuData=[
  {
    itemKey:5,
    itemVal:"555",
  },
  {
    itemKey:6,
    itemVal:"666",
  }
];

var data1 = [
  {
    "key": 1,
    "icon": "appstore",
    "title": "软件测试科",
    "url": "",
    "children": [
      {
        "key": 4,
        "title": "广电组",
        "url": "",
        "children": [
          {
            "key": 8,
            "title": "客制化",
            "url": "",
            "children": [
              {
                "key": 19,
                "title": "版本测试",
                "url": ""
              }
            ]
          }, {
            "key": 9,
            "title": "客供",
            "url": ""
          }
        ]
      }, {
        "key": 5,
        "title": "光通组",
        "url": "",
        "children": [
          {
              "key": 16,
              "text": "版本测试",
              "title": "",
              "url": ""
          }
        ]
      }
    ]
  }, {
    "key": 2,
    "icon": "setting",
    "title": "硬件测试科",
    "url": ""
  }, {
    "key": 3,
    "icon": "mail",
    "title": "EMC测试科",
    "url": ""
  }
]
var data2 = [
  {
    "key": 1,
    "icon": "appstore",
    "title": "hahaha",
    "url": "",
    "children": [
      {
        "key": 4,
        "title": "广电组",
        "url": "",
        "children": [
          {
            "key": 8,
            "title": "客制化",
            "url": "",
            "children": [
              {
                "key": 19,
                "title": "版本测试",
                "url": ""
              }
            ]
          }, {
            "key": 9,
            "title": "客供",
            "url": ""
          }
        ]
      }, {
        "key": 5,
        "title": "光通组",
        "url": "",
        "children": [
          {
              "key": 16,
              "text": "版本测试",
              "title": "",
              "url": ""
          }
        ]
      }
    ]
  }, {
    "key": 2,
    "icon": "setting",
    "title": "硬件测试科",
    "url": ""
  }, {
    "key": 3,
    "icon": "mail",
    "title": "EMC测试科",
    "url": ""
  }
]

class Page extends Component{
  state = {
      Index:5, 
      MenuIndex:0, 
     }       
  getMenuData(){
      return MenuData;
  }
  getData(index){
    if(index==5)
      return data1;
    else
      return data2;
  }
  getArticle(index)
  {
     if(index>0){var str="文章内容";
    return  str;}
    else return "111";
    
  }
  onChangeIndexHandle=(indexVal)=>{
     this.setState({
      Index: indexVal,
    });
  }
  onChangeMenuIndexHandle=(indexVal)=>{
     this.setState({
      MenuIndex: indexVal,
    });
  }
  render(){
    return(
        <div >
          <div style={{height:'100%',}}>
            <NavBar Index={this.state.Index} MenuData={this.getMenuData()} onChangeIndexHandle={this.onChangeIndexHandle}/>
          </div>  
          <div style={{ width: '100%'}}>       
            <MenuNav className="MenuHeight" data={this.getData(this.state.Index)} 
            onChangeMenuIndexHandle={this.onChangeMenuIndexHandle}/>
            <div style={{ marginLeft:10, marginTop:15,  float:'left', width:'auto',minWidth:400, height:'auto',  background:'red',display:'inline-block'  ,height: document.body.clientHeight} }>
               <div>
                <span>阅读量：</span>
               </div>
               <div> 
                  MarkDown文章渲染{this.getArticle(this.state.MenuIndex)}
                </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Page;