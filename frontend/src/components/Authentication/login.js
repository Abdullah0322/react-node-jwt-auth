import React from "react";
import Header from "../Header";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signup from "./signup";
import './login.css'
import userService from "../../services/UserService";
// function formatDate(date) {
//     return date.toLocaleDateString();
//   }

// function formatName(user){

// return user.firstNAME+ user.LastName;
// }

//   const user={

// firstNAME: "Abdullah",
// LastName:'Naveed',
// url:"https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"

// }

// const element=(

//  <h1>hello, {formatName(user)}
//  </h1>

// );
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'https://placekitten.com/g/64/64',
//     },
//   };
//    function useToggle(initialValue = false) {
//     const [value, setValue] = React.useState(initialValue);
//     const toggle = React.useCallback(() => {
//       setValue(v => !v);
//     }, []);
//     return [value, toggle];
//   }

const Login = (props) => {
const [email,setEmail]=React.useState("")
const [password,setPassword]=React.useState("")


  return (
    <div>
      <Header />
      <div className= 'container'>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}>
          <h3 className="sign"> Sign In</h3>
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}>
         
            <input
              type="text"
              className="i1"
             
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value); }}
            />
            <br></br>
            <input
              type="password"
              className="i2"
            
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value); }}
            />
            <p className="forget">Forget Username and Password?</p>
            <button className="b1"  onClick= {(e) => {
            userService
              .login(email, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/";

              
              })
              .catch((err) => {
                console.log(err);
                
              });
              
          }}>
              Sign In
            </button>
        
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}>
          <Link to="/signup">
            {" "}
            <button className="b2">
            Dont have an Account? <span className="signup">Signup</span>
            </button>{" "}
          </Link>
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
      </div>
    
    </div>
  );
};

export default Login;
