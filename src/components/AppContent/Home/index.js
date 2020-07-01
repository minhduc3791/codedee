import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import * as signalR from '@microsoft/signalr'

const { Header } = Layout

const Home = ({path, url}) => {
  // const connection = new signalR.HubConnectionBuilder()
  //     .withUrl("https://localhost:44345/chatHub")
  //     .build();
  //
  // connection.on("ReceiveMessage", (user, message) => {
  //     console.log(user, message);
  // });

  useEffect(() => {
    //connection.start().then(() => connection.invoke("SendMessage", "pikachu", "Hello"));
    // console.log(`path: ${path}`);
    // console.log(`url: ${url}`);
    // console.log(`category: ${category}`);
    // console.log(`sub: ${sub}`);
    // console.log('location:', location);
  });
  return(
    <h1>introduction...</h1>
  )
}

export default Home;
