import React from 'react';
import './NavigationBar.css';
import { DatePicker, message } from 'antd';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

var Bar = React.createClass({
    getInitialState:function(){
        return({isSelect:0})
    },
    handleClick:function(event){
     this.props.onhandleClick(this.props.myIndex)
    },
    onhandleOver:function(){  
        this.setState({isSelect:this.props.myIndex})
    },
    onhandleOut:function(){  
        this.setState({isSelect:0})
    },
    render(){
        var style="bar";
        style=this.props.index===this.props.myIndex?"bar active":"bar";
        if(this.state.isSelect===0&&this.props.index!==this.props.myIndex)
            style="bar"
        if(this.state.isSelect!=0)
            style="bar active"
        return(
            <div className={style} 
             onMouseOver={this.onhandleOver} onMouseOut={this.onhandleOut}
             onClick={this.handleClick} >
                <a className="bara" >
                    <i></i>
                    {this.props.name}
                </a>
            </div>
        );
    }
})

var BarList = React.createClass({
  
    render(){
        var index=this.props.index;
        var onhandleClick=this.props.onhandleClick;
        var bars = this.props.msg.map(function(m){
                return (<Bar icon={m.icon}  onhandleClick={onhandleClick} index={index} myIndex={m.index}
                name={m.name} />)       
         }
        );
        return(
        <div className="bars">{bars}</div>
        );
    }
});

var NavigationBar = React.createClass({
     getInitialState: function (){
        return {index:0,date:''}
    },
    onhandleClick : function(myIndex){
        this.setState({index:myIndex })
    },
    handleChange(date1) {
       message.info('您选择的日期是: ' + date1.toString());
       this.setState({ date:date1 });
     },
    render(){
        return(
            <div>
                <div className="nav">
                <BarList msg={this.props.msg} index={this.state.index} onhandleClick={this.onhandleClick}/>  
                </div>
                 <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={value => this.handleChange(value)} />
                    <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
                </div>
                <div>
                    <Tree>

                    </Tree>
                </div>
           </div>);
        }
    }
)

export default NavigationBar;



