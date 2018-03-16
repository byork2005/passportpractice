import React from "react";
import {Row, Col, Button, Well} from 'react-bootstrap';

export const List = ({ children }) => {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">
          {children}
        </ul>
      </div>
    );
  };