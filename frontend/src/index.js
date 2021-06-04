import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./components/Authentication/login";
import Home from "./Screens/Home";
import Signup from "./components/Authentication/signup";


// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function handlesubmit(e) {
//   e.preventDefault();
//   console.log("You clicked the Button");
// }

// function Apps() {
//   return (
//     <div>
//       <Welcome name="Sara" />

//       <Welcome name="Abdullah" />

//       <button onClick={handlesubmit}>Please Click Me</button>
//     </div>
//   );
// }

// function UserGreeting(props){

// return<h1>Welcome Back</h1>

// }

// function GuestGreeting(props){

// return <h1>Please Signup</h1>

// }

// function Listitems(props){
// return <li>props.vallue</li>
// }

// function NumberList(props){
// const numbers=props.numbers;
// const items=numbers.map((number)=><Listitems key={number.toString()}  value={number}/> );
// return <ul>{items} </ul>

// }

// function Greeting(props){

//   const isLoggin= props.isLoggin;
// if(isLoggin==true) {
//   return <UserGreeting />

// }
//  else{return<GuestGreeting/>}
// }

// const numbers=[1,2,3,4,5];
// const element = <Welcome name="Sara"></Welcome>;
ReactDOM.render(
  <BrowserRouter>
  
  
<Switch>

<Route path='/' exact render={props=><Home{...props}/>}/>
<Route path='/login' component={Login} />   
<Route path='/signup' component={Signup} />     
</Switch>
  </BrowserRouter> ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
