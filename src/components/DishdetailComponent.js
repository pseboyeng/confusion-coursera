import React from 'react';
import { CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

const DishdetailComponent = ({onClick,image,name,description}) => {
    return (
        <div onClick={onClick}>
                <CardImg width="100%" object src={image} alt={name}/>
                    <CardImgOverlay>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardImgOverlay>
            </div>
    );
}

export default DishdetailComponent;