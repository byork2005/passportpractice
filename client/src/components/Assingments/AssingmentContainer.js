import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import './Assingments.css';
import Question from './Question.js'


const DATA = "./test.json"

class AssingmentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: {},
            index: 0,
            numberOfQuestions: 0,
            score: 0,
            answers: [],
            completed: false
        };
      }

    componentDidMount() {
        fetch(DATA)
            .then( (response) => {response.json()})
            .then( (json) => {
                console.log(json);
                this.setState({
                    quiz: json,
                    // numberOfQuestions: response.questions.length
                })
            })
            // .then( (result) => {
            //     this.setState({quiz: result})
            //     this.setState({numberOfQuestions: result.questions.length}.bind(this))
            // }
        }


      handleSubmit() {
        if (this.state.index + 1 < this.state.numberOfQuestions) {
          this.setState({'index': this.state.index + 1})
        } else {
          this.setState({'completed': true})
          let score = this.state.score || 0
          this.state.answers.map((answer, i) => (
            score = score + this.state.quiz.questions[i].answers[answer].value
          ))
          this.setState({'score': score})
        }
      }

      handleAnswerSelected(event) {
        let list = [...this.state.answers.slice(0, this.state.index),
                    parseInt(event.target.value),
                    ...this.state.answers.slice(this.state.index + 1)]
        this.setState({'answers': list})
      }
   

    render() {
        const {
            quiz, index, numberOfQuestions, score 
        } = this.state

        return (
            <div>
                <Row>
                    <div>
                        <h1>{quiz.instructions}</h1>
                        <div>
                            <p>You have finished this assingment</p>
                            <p>Your score is {score}</p>
                        </div>
                        :
                        <div>
                            <h2>Question {index + 1} of {numberOfQuestions}</h2>
                            {quiz.questions && index < quiz.questions.length ?
                                <Question
                                    question={quiz.questions[index]}
                                    index={index}
                                    onAnswerSelected={ (event) => this.handleAnswerSelected (event)}
                                onSubmit={ () => this.handleSubmit() } 
                            /> 
                        : '' }
                
                        </div>
                    </div>
                </Row>
            </div>
        );
    }

}

export default AssingmentContainer;