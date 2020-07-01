import React from 'react';
import { Input, Button } from 'antd'
import 'antd/dist/antd.css';
import { withCookies } from 'react-cookie'
import {
  useHistory,
} from "react-router-dom";

const Login = ({cookies}) => {
  let history = useHistory();

  const doLogin = () => {
    console.log('login');
    cookies.set('token', 'pikachu');
    console.log(cookies);
    history.push("/");
  }

  return(
    <div>
      <Input placeholder="username"></Input>
      <Input placeholder="password"></Input>
      <Button onClick={() => {doLogin()}}>Login</Button>
    </div>
  )
}

export default withCookies(Login);
