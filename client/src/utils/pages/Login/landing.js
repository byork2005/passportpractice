import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Row, Col, Well, Button} from 'react-bootstrap';
import Signup from "./sign-up.js";
import Login from "./login.js";
import "./style.css";

const WelcomePanel = () => (
    <Well>
        <Row>
            <h1 id="welcomeHeader">Welcome</h1>
        </Row>
        <Row>
            <Col xs={4} md={2}></Col>
            <Col xs={4} md={4}>
                    <Link to="/login">
                        <Button bsStyle="primary" id="btn1">Login</Button> 
                    </Link>
            </Col>
            <Col xs={4} md={4}>
                    <Link to="/signup">
                        <Button bsStyle="success" id="btn2">Sign Up</Button>
                    </Link>
            </Col>
            <Col xs={4} md={2}></Col>
        </Row>
    </Well>
)

class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          email: null,
          name: null,
          role: null
        }
    
        this.updateUser = this.updateUser.bind(this)
      }
    
      updateUser(userObject) {
        this.setState(userObject)
        console.log('Update User: ', this.state)
      }
     
    render() {
        return (
            <div>
                <Row>
                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                        <WelcomePanel/>
                        <Route path={`${this.props.match.url}/login`} component={Login} />
                        <Route path={`${this.props.match.url}/signup`} component={Signup} />
                    </Col>
                    <Col xs={4} md={4}>
                    </Col>

                </Row>
            </div>
        )
    }

}

export default LandingPage;