import React from 'react'
import Header from '../Header'
import Login from './login'
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './login.css'

const Signup=(props)=> {

    
    return (

        <div>
        <Header />
        <div className= 'container'>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <h3 className="sign"> Sign up</h3>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <form>
              <input
                type="text"
                className="i1"
                id="email"
                name="password"
                placeholder="Email"
                required
              />
              <br></br>
              <input
                type="password"
                className="i2"
                id="psw"
                name="psw"
                placeholder="Password"
                required
              />
             
              
              
              <button className="b3" type="submit">
                Sign up
              </button>
            </form>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <Link to="/login">
              {" "}
              <button className="b2">
              Already Have an Account<span className="signup">  Sign In</span>
              </button>{" "}
            </Link>
          </Col>
          <Col xs={6} md={4}></Col>
        </Row>
        </div>
      
      </div>
    )
}
export default Signup