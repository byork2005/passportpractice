import React from "react";
import {Row, Col, Button, Well} from 'react-bootstrap';

import React from "react";

export const ListItem = props =>
  <li className="list-group-item">
    <Well>
    {props.children}
    </Well>
  </li>;