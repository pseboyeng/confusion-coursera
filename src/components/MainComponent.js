import React,{Component} from 'react';
import { Navbar, NavbarBrand, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import CardComponent from './CardComponent';
import Menu from './MenuComponent';
import { DISHES } from './shared/dishes';

class Main extends Component{
  state = {
      dishes: DISHES,
      selectedDish: null
    };


    onDishSelect = (dish)=> {
        this.setState({ selectedDish : dish });
    }

    //RENDER SELECTED DISH.
    renderDish =(dish)=> {
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

    //RENDER COMMENTS.
    renderComments=(dish)=>{
      if(dish != null){
        return (
          <div className="col-12 col-md-5 m-1">
          <CardComponent>
            <CardBody>
              <CardTitle>Comments</CardTitle>
              {
                dish.comments.map((comment)=>{
                  return (
                    <div key={comment.id}>
                      <CardText>{comment.comment}</CardText>
                      <CardText>--{comment.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</CardText>
                    </div>
                  );
                })
              }
            </CardBody>
          </CardComponent>
          </div>
        );
      }else{
        return (
          <div></div>
        );
      }
    }


  render() {

    // console.log(this.state.selectedDish)
    return (
      <div>
          <Navbar dark color="secondary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <div className="container">
            <Menu dishes={this.state.dishes} onClick={this.onDishSelect}/>
            <div className="row">
              {
                //Render Selected Dish.
                this.renderDish(this.state.selectedDish)
              }

              {
                //Render Comments for Selected Dish.
                this.renderComments(this.state.selectedDish)
              }
            </div>
          </div>
      </div>
    );
  }
}

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

export default Main;
