import React from 'react';
import CardComponent from './CardComponent';
import DishdetailComponent  from './DishDetailComponent';

const Menu =({dishes,onClick})=>{
    return(
        <div className="row">
            {dishes.map((dish)=>{
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <CardComponent>
                            <DishdetailComponent 
                                onClick={() =>onClick(dish)}
                                image={dish.image} alt={dish.name}
                                name={dish.name}
                                />
                        </CardComponent>
                    </div>
                );
            })
            }
        </div>
    );
}

export default Menu;
