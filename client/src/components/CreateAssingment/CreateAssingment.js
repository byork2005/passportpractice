import React, { Component } from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Carousel } from 'react-bootstrap';
import './CreateAssingment.css';
import './style.css';

//practice form
class CreateAssingment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        instructions:"",
        questions: [
            {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
            {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
                {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
                {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
                {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
                {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
                {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
                {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
                {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]},
                {
            question: "",
            answers: [
                {
                    answer:"",
                    value:false, 
                },
                {
                    answer:"",
                    value:false,
                },
                {
                    answer:"",
                    value:false,  
                },
                {
                    answer:"",
                    value:false,
                }]}
           ],
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    //this is a sunction to create an array, right now when it is called it 
    //breaks the dom
    convertObjQuestionsToArr() {
        return [
            this.state.question1,
            this.state.question2,
            this.state.question3,
            this.state.question4,
            this.state.question5,
            this.state.question6,
            this.state.question7,
            this.state.question8,
            this.state.question9,
            this.state.question10
        ]
    }
    //right now, on submitt, the questions are printed in colse, it is
    //saved in state.  just need to push it to the db
    handleSubmit(event) {
        // event.convertObjQuestionsToArr();
        event.preventDefault();
        console.log(this.state)
        // console.log(event.convertObjQuestionsToArr());
      }
  
    handleChange(event) {
        const { name, value} = event.target;
        console.log(name)
        this.setState({
            [name]: value
          });
    };

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <Row>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Instructions</ControlLabel>
                    <FormControl componentClass="textarea" name="instructions" type="text" value={this.state.instructions} onChange={this.handleChange} placeholder="Add Assingment Instructions Here" />
                </FormGroup>
                <hr/>
            </Row>
            
                <Row>
                    <div className="scroll">
                    
                        <Row>
                            <Col xs={10} md={10}>
                            <h4>Question 1</h4>
                            <FormControl
                                    type="text"
                                    name="question1"
                                    value={this.state.questions[0].question}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                            <FormControl.Feedback />
                            </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.questions[0].answers[0].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value1"
                                        type="checkbox"
                                        checked={this.state.questions[0].answers[0].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.questions[0].answers[1].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value2"
                                        type="checkbox"
                                        checked={this.state.questions[0].answers[1].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.questions[0].answers[2].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value3"
                                        type="checkbox"
                                        checked={this.state.questions[0].answers[2].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.questions[0].answers[3].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value4"
                                        type="checkbox"
                                        checked={this.state.questions[0].answers[3].value}
                                        onChange={this.handleChange} />
                                </Col>
                        
                        </Row>
                        <hr/>

                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 2</h4>
                                <FormControl
                                        type="text"
                                        name="question2"
                                        value={this.state.questions[1].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.questions[1].answers[0].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value1"
                                        type="checkbox"
                                        checked={this.state.questions[1].answers[0].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.questions[1].answers[1].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value2"
                                        type="checkbox"
                                        checked={this.state.questions[1].answers[1].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.questions[1].answers[2].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value3"
                                        type="checkbox"
                                        checked={this.state.questions[1].answers[2].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.questions[1].answers[3].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value4"
                                        type="checkbox"
                                        checked={this.state.questions[1].answers[3].value}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 3</h4>
                                <FormControl
                                        type="text"
                                        name="question3"
                                        value={this.state.questions[2].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                            <Col xs={8} md={8}>
                                    <ControlLabel>Answer 1</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer1"
                                        value={this.state.questions[2].answers[0].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value1"
                                        type="checkbox"
                                        checked={this.state.questions[2].answers[0].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.questions[2].answers[1].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value2"
                                        type="checkbox"
                                        checked={this.state.questions[2].answers[1].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.questions[2].answers[2].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value3"
                                        type="checkbox"
                                        checked={this.state.questions[2].answers[2].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.questions[2].answers[3].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value4"
                                        type="checkbox"
                                        checked={this.state.questions[2].answers[3].value}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 4</h4>
                                <FormControl
                                        type="text"
                                        name="question4"
                                        value={this.state.questions[3].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 1</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer1"
                                    value={this.state.questions[3].answers[0].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value1"
                                        type="checkbox"
                                        checked={this.state.questions[3].answers[0].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 2</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer2"
                                        value={this.state.questions[3].answers[1].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value2"
                                        type="checkbox"
                                        checked={this.state.questions[3].answers[1].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 3</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer3"
                                        value={this.state.questions[3].answers[2].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value3"
                                        type="checkbox"
                                        checked={this.state.questions[3].answers[2].value}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col xs={8} md={8}>
                                    <ControlLabel>Answer 4</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="answer4"
                                        value={this.state.questions[3].answers[3].answer}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                    <FormControl.Feedback />
                                </Col>
                                <Col xs={2} md={2}>
                                    <ControlLabel>Correct Answer?</ControlLabel>
                                    <input
                                        name="value4"
                                        type="checkbox"
                                        checked={this.state.questions[3].answers[3].value}
                                        onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 5</h4>
                                <FormControl
                                        type="text"
                                        name="question5"
                                        value={this.state.questions[4].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                            <Col xs={8} md={8}>
                            <ControlLabel>Answer 1</ControlLabel>
                            <FormControl
                                type="text"
                                name="answer1"
                                value={this.state.questions[4].answers[0].answer}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value1"
                                    type="checkbox"
                                    checked={this.state.questions[4].answers[0].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 2</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer2"
                                    value={this.state.questions[4].answers[1].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value2"
                                    type="checkbox"
                                    checked={this.state.questions[4].answers[1].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 3</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer3"
                                    value={this.state.questions[4].answers[2].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value3"
                                    type="checkbox"
                                    checked={this.state.questions[4].answers[2].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 4</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer4"
                                    value={this.state.questions[4].answers[3].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value4"
                                    type="checkbox"
                                    checked={this.state.questions[4].answers[3].value}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>

                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 6</h4>
                                <FormControl
                                        type="text"
                                        name="question6"
                                        value={this.state.questions[5].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                            <Col xs={8} md={8}>
                            <ControlLabel>Answer 1</ControlLabel>
                            <FormControl
                                type="text"
                                name="answer1"
                                value={this.state.questions[5].answers[0].answer}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value1"
                                    type="checkbox"
                                    checked={this.state.questions[5].answers[0].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 2</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer2"
                                    value={this.state.questions[5].answers[1].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value2"
                                    type="checkbox"
                                    checked={this.state.questions[5].answers[1].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 3</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer3"
                                    value={this.state.questions[5].answers[2].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value3"
                                    type="checkbox"
                                    checked={this.state.questions[5].answers[2].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 4</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer4"
                                    value={this.state.questions[5].answers[3].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value4"
                                    type="checkbox"
                                    checked={this.state.questions[5].answers[3].value}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 7</h4>
                                <FormControl
                                        type="text"
                                        name="question7"
                                        value={this.state.questions[6].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                            <Col xs={8} md={8}>
                            <ControlLabel>Answer 1</ControlLabel>
                            <FormControl
                                type="text"
                                name="answer1"
                                value={this.state.questions[0].answers[0].answer}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value1"
                                    type="checkbox"
                                    checked={this.state.questions[6].answers[0].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 2</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer2"
                                    value={this.state.questions[6].answers[1].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value2"
                                    type="checkbox"
                                    checked={this.state.questions[6].answers[1].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 3</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer3"
                                    value={this.state.questions[6].answers[2].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value3"
                                    type="checkbox"
                                    checked={this.state.questions[6].answers[2].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 4</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer4"
                                    value={this.state.questions[6].answers[3].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value4"
                                    type="checkbox"
                                    checked={this.state.questions[6].answers[3].value}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 8</h4>
                                <FormControl
                                        type="text"
                                        name="question8"
                                        value={this.state.questions[7].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                            <Col xs={8} md={8}>
                            <ControlLabel>Answer 1</ControlLabel>
                            <FormControl
                                type="text"
                                name="answer1"
                                value={this.state.questions[7].answers[0].answer}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value1"
                                    type="checkbox"
                                    checked={this.state.questions[7].answers[0].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 2</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer2"
                                    value={this.state.questions[7].answers[1].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value2"
                                    type="checkbox"
                                    checked={this.state.questions[7].answers[1].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 3</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer3"
                                    value={this.state.questions[7].answers[2].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value3"
                                    type="checkbox"
                                    checked={this.state.questions[7].answers[2].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 4</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer4"
                                    value={this.state.questions[7].answers[3].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value4"
                                    type="checkbox"
                                    checked={this.state.questions[7].answers[3].value}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 9</h4>
                                <FormControl
                                        type="text"
                                        name="question9"
                                        value={this.state.questions[8].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                            <Col xs={8} md={8}>
                            <ControlLabel>Answer 1</ControlLabel>
                            <FormControl
                                type="text"
                                name="answer1"
                                value={this.state.questions[8].answers[0].answer}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value1"
                                    type="checkbox"
                                    checked={this.state.questions[8].answers[0].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 2</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer2"
                                    value={this.state.questions[8].answers[1].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value2"
                                    type="checkbox"
                                    checked={this.state.questions[8].answers[1].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 3</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer3"
                                    value={this.state.questions[8].answers[2].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value3"
                                    type="checkbox"
                                    checked={this.state.questions[8].answers[2].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 4</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer4"
                                    value={this.state.questions[8].answers[3].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value4"
                                    type="checkbox"
                                    checked={this.state.questions[8].answers[3].value}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                                <Col xs={10} md={10}>
                                <h4>Question 10</h4>
                                <FormControl
                                        type="text"
                                        name="question10"
                                        value={this.state.questions[9].question}
                                        placeholder="Enter text"
                                        onChange={this.handleChange}
                                        />
                                <FormControl.Feedback />
                                </Col>
                            <hr/>
                            <Col xs={8} md={8}>
                            <ControlLabel>Answer 1</ControlLabel>
                            <FormControl
                                type="text"
                                name="answer1"
                                value={this.state.questions[9].answers[0].answer}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value1"
                                    type="checkbox"
                                    checked={this.state.questions[9].answers[0].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 2</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer2"
                                    value={this.state.questions[9].answers[1].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value2"
                                    type="checkbox"
                                    checked={this.state.questions[9].answers[1].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 3</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer3"
                                    value={this.state.questions[9].answers[2].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value3"
                                    type="checkbox"
                                    checked={this.state.questions[9].answers[2].value}
                                    onChange={this.handleChange} />
                            </Col>
                            <Col xs={8} md={8}>
                                <ControlLabel>Answer 4</ControlLabel>
                                <FormControl
                                    type="text"
                                    name="answer4"
                                    value={this.state.questions[9].answers[3].answer}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </Col>
                            <Col xs={2} md={2}>
                                <ControlLabel>Correct Answer?</ControlLabel>
                                <input
                                    name="value4"
                                    type="checkbox"
                                    checked={this.state.questions[9].answers[3].value}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>
                    </div>
                            
                </Row>
                <Row>
                    <hr/>
                    <input type="submit" value="Submit" />  
                </Row>
            {/* </div> */}
        </form>
      );
    }
  }

export default CreateAssingment;

