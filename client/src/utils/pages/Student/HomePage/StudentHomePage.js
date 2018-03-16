import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Row, Col, Button, Popover, Tooltip, Modal, Form, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
// import { ClassBanner } from "../../../components/Homepage";
// import './style.css';

 class StudentHomePage extends Component {
    constructor (props, context) {
        super(props, context)

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this is for the class code
        this.state = {
          value: ''
        }
        //this is for the modal
        this.state = {
        show: false
        }
    }
    //for class code, this should validate, but atm it is not working
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
                                <Button bsStyle="primary" id="btn1" onClick={this.handleShow}>Add Class</Button>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </Col>
                    <Row>
                        <Col xs={6} md={8}>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header>
                                    <Modal.Title>Add A Class</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <FormGroup
                                        controlId="formBasicText"
                                        //this should be the validation but it is not working
                                        // validationState={this.getValidationState()}
                                        >
                                        <ControlLabel>Add the Class Code Below</ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={this.state.value}
                                            placeholder="Enter Code"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        <HelpBlock>Validation is based on code length.</HelpBlock>
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

export default StudentHomePage;