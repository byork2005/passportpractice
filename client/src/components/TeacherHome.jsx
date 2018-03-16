import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const TeacherHome = ({ secretData, user}) => (  
    <Card className="container">
    <CardTitle
      title="Teacher Home"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
)

export default TeacherHome;