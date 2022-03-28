import React,{Component} from 'react';
import { CardImg, CardBody, CardTitle, CardText, Card,CardImgOverlay } from 'reactstrap';
import CardComponent from './CardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from './shared/dishes';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  state = {
      dishes: DISHES,
     // selectedDish: null
    };


  // onDishSelect = (dish)=> {this.setState({ selectedDish : dish })}


  render() {

    const HomePage =() => {
      return (
        <Home />
      );
    }

    // console.log(this.state.selectedDish)
    return (
      <div>
          <Header />
          <div className="container">
              {/* <Menu dishes={this.state.dishes} onClick={this.onDishSelect}/>
              <RenderDish dish={this.state.selectedDish}/> */}
              <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                <Redirect to="/home" />
              </Switch>
          </div>
          <Footer />
      </div>
    );
  }
}
//SUPPOSED TO BE DISH DETAIL.
const RenderDish =({dish})=>{
  return(
    <div className="row">
      {
          dish?
          <div className="col-12 col-md-5 m-1">
                  <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>
          </div>
          :<div></div>
        }

        {
          dish?
          <div className="col-12 col-md-5 m-1">
            <CardComponent>
              <CardBody>
                <CardTitle>Comments</CardTitle>
                {
                  dish.comments.map(({id,comment,author,date})=>{
                    return (
                      <div key={id}>
                        <CardText>{comment}</CardText>
                        <CardText>
                          --{author},  
                          {new Intl.DateTimeFormat('en-US', 
                          { year: 'numeric', month: 'short', day: '2-digit'})
                          .format(new Date(Date.parse(date)))}
                        </CardText>
                      </div>
                    );
                  })
                }
              </CardBody>
            </CardComponent>
          </div>
          :<div></div>
        }

    </div>
  );
}

export default Main;
