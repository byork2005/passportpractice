import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Row, Col, Button, Popover, Tooltip, Modal, Form, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
// import { ClassBanner } from "../../../components/Homepage";
// import './style.css';

 class TeacherHomePage extends Component {
    constructor (props, context) {
        super(props, context)

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this is for the class code
        this.state = {
            name: '',
            teacher: '',
            schedule: '',
            location: ''
        }
        //this is for the modal
        this.state = {
        show: false
        }
    }
    //this is the validation code for the
    //student add class.  left it here as a reminder to make
    //a validation for this form. What a nightmare
    // getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 6) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    //   }
    //for class code
    handleChange(e) {
        this.setState({ value: e.target.value });
      }
    

      //for the modal
     handleClose() {
    this.setState({ show: false });
    }
    //for the modal
    handleShow() {
        this.setState({ show: true });
    }

    render() {

        const popover = (
            <Popover id="modal-popover" title="popover">
              
            </Popover>
          );
          const tooltip = <Tooltip id="modal-tooltip"></Tooltip>;

        return (
            <div>
                <Row>
                    <Col xs={6} md={2}>
                        <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
                            <div className="sidebar-nav navbar-collapse collapse">
                                <ul className="nav in" id="side-menu">
                                <li>
                                <Button bsStyle="primary" id="btn1" onClick={this.handleShow}>Create Class</Button>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </Col>
                    <Row>
                        <Col xs={6} md={8}>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header>
                                    <Modal.Title>Create A Class</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <FormGroup
                                        controlId="formBasicText"
                                        //this should be the validation but it is not working
                                        // validationState={this.getValidationState()}
                                        >
                                        <ControlLabel>Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.name}
                                            placeholder="Class Name"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        <ControlLabel>Teacher</ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.teacher}
                                            placeholder="Teacher Name"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        <ControlLabel>Schedule</ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.schedule}
                                            placeholder="Class Schedule"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        <ControlLabel>Location</ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.location}
                                            placeholder="Classroom"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        
                                        </FormGroup>
                                        <Button type="submit">Submit</Button>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </Col>
                        <Col xs={6} md={4}>
                        
                        </Col>
                    </Row>
                </Row>
            </div>
        )
    }

}

export default TeacherHomePage;