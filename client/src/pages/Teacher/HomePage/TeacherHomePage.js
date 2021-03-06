import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import './style.css';

const Sidebar = ({ secretData, user }) => (
    <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
      <div className="sidebar-nav navbar-collapse collapse">
        <ul className="nav in" id="side-menu">
          <li>
              <h3>Welcome</h3>

            </li>
        </ul>
      </div>
    </div>
 );

const TeacherHomePage = ({ secretData, user}) => (  
    <Card className="container">
    <CardTitle
      title="Teacher Home"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
)

export default TeacherHomePageTWO;