import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import './Assingments.css';
import AssingmentContainer from './AssingmentContainer.js';

class Assingments extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
      }

   

    render() {
   

        return (
            <div>
               <AssingmentContainer/>
            </div>
        );
    }

}

export default Assingments;