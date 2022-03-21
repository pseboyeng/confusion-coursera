import React,{ Component } from 'react';
import { CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

class DishdetailComponent extends Component {

    render() {
        return (
            <div onClick={this.props.onClick}>
                <CardImg width="100%" object src={this.props.image} alt={this.props.name}/>
                    <CardImgOverlay>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardText>{this.props.description}</CardText>
                    </CardImgOverlay>
            </div>
        );
    }
}

export default DishdetailComponent;