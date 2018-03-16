import React from "react";
import {Row, Col, Button, Well} from 'react-bootstrap';
import {ClassList, ClassListItem} from './Homepage';
import API from "../../utils/API";

// So this is what I beleive this is going to look like 
// it is hard without having something to work with 
// so I was kind of building this blind 
// if one of you would give this a look, 
// a lot of the errors here atm are because of the lack of 
// DB.  also, you can see I make a classes array, as there 
// is the possibility of numerous classes.  I followed the book 
// activity a lot for this.  Lemme know what you think

// class ClassBanner extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             classes: [],
//             name: '',
//             teacher: '',
//             schedule: '',
//             location: ''
//         };    
//     };

//     componentDidMount() {
//         this.loadClassBanner();
//     };
    
//     loadClass = () => {
//         API.getClasses()
//           .then(res =>
//             this.setState({ classes: res.data, name: "", teacher: "", schedule: "", location: "" })
//           )
//           .catch(err => console.log(err));
//     };

//     render () {
//       return(
//         <Row>
//             {this.state.classes.length ? (
//                 <ClassList>
//                     {this.state.classes.map(  ( {/* theoretically should be class => now classes */}
//                         <ClassListItem>
//                             <h1>{class.name}</h1>
//                             <hr/>
//                             <h3>Teacher: {class.teacher}, TIme: {class.schedule}, Location: {class.location}</h3>
//                         </ClassListItem>
//                     ))}
//                 </ClassList>
//             )}
//         </Row>
//       );
//     }
// }

export default ClassBanner;