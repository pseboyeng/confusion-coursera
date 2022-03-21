import React,{ Component } from 'react';
import { CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class SelectedDishComponent extends Component {
    render() {
        return (
              <div>
                <CardImg width="100%" object src={this.props.image} alt={this.props.name}/>
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardText>{this.props.description}</CardText>
                    </CardBody>
               </div> 
        );
    }
}

export default SelectedDishComponent;