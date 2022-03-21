import React from 'react';
import { CardImg, CardTitle, CardText, CardBody } from 'reactstrap';


const SelectedDishComponent = ({image, name, description}) => {
    return (
        <div>
                <CardImg width="100%" object src={image} alt={name}/>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
               </div> 
    );
}
export default SelectedDishComponent;