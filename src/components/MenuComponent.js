import React,{ Component } from 'react';
import { CardText, CardTitle, CardBody, Card, CardImg, CardImgOverlay } from 'reactstrap';
import  DishdetailComponent  from './DishDetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish : dish })
    }

    renderDish(dish) {
        
        if(dish != null) {
            return(
                    <div className="col-12 col-md-5 m-1">
                        <CardComponent>
                            <SelectedDishComponent 
                                image={dish.image} alt={dish.name} 
                                name={dish.name}
                                description={dish.description}
                            />
                        </CardComponent>
                    </div>
            );
        }else{
            return(
                    <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <CardComponent>
                       <DishdetailComponent onClick={()=>this.onDishSelect(dish)}
                             image={dish.image} alt={dish.name}
                             name={dish.name}
                        /> 
                    </CardComponent>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {
                       this.state.selectedDish != null? 
                    
                           <div className="col-12 col-md-5 m-1">
                                <CardComponent>
                                    <CardBody>
                                        <CardTitle>Comments</CardTitle>
                                        <div>
                                            {
                                                this.props.dishes.map((dish, index) => {
                                                    return (
                                                            <div key={index}>
                                                                <CardText>{dish.comments[index].comment}</CardText>
                                                                <CardText>--{dish.comments[index].author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.comments[index].date)))}</CardText>
                                                            </div>
                                                        
                                                        );
                                                })
                                            }
                                        </div>
                                    </CardBody>
                                </CardComponent>
                           </div>
                       
                       :
                       
                       <div></div>
                   }
                </div>
            </div>
        );
    }
}

//CARD COMPONENT.
const CardComponent = ({children}) =><Card>{children}</Card>

//SELECTED DISH COMPONENT.
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

export default Menu;
