import React,{ Component } from 'react';
import CardComponent from './CardComponent';
import DishdetailComponent  from './DishDetailComponent';

class Menu extends Component {

    state = {

    }

    render() {

        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <CardComponent>
                       <DishdetailComponent 
                             onClick={() => this.props.onDishClick(dish)}
                             
                             image={dish.image} alt={dish.name}
                             name={dish.name}
                        /> 
                    </CardComponent>
                </div>
            );
        });

        return (
                <div className="row">
                    {menu}
                </div>
        );
    }
}

export default Menu;
