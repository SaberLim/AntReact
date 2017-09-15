import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class LoginForm extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {       
        console.log('Received values of form: ', values);
        var formData = new FormData();
        formData=values;
        var xhr  = new XMLHttpRequest();
        xhr.open("",formData);
        xhr.send(formData);
        xhr.onreadystatechange = function (){} 
      }  
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div style={{height:500,width:240, margin:'0 auto',marginTop:50,}}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入您的账号!' },
            {pattern:new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),message:'邮箱格式不正确'}
            ],
          })(
             <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
          </FormItem>
          <FormItem>
             {getFieldDecorator('password', {
            rules: [{ required: true, message: '输入您的密码!' }],
          })(
             <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
          </FormItem>
          <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
               <a className="login-form-forgot" href="">Forgot password</a>
              <Button  style={{width:240}} type="primary" htmlType="button" onClick={this.handleSubmit} >
                Log in
              </Button>
              Or <a href="">register now!</a>
          </FormItem>
          
        </Form>
      </div>
    )
  }
}

const Login = Form.create()(LoginForm);


export default Login;
