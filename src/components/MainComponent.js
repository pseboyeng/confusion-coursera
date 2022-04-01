import React,{Component} from 'react';
// import { CardImg, CardBody, CardTitle, CardText, Card, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import CardComponent from './CardComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from './shared/dishes';
import { COMMENTS } from './shared/comments';
import { PROMOTIONS } from './shared/promotions';
import { LEADERS } from './shared/leaders';
import {Switch, Route, Redirect } from 'react-router-dom';
import DishDetail from './DishDetailComponent';

class Main extends Component{
  state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
     // selectedDish: null
    };


  // onDishSelect = (dish)=> {this.setState({ selectedDish : dish })}


  render() {

    const HomePage =() => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId =({match}) => {
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    return (
      <div>
          <Header />
          <div className="container">
              <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId}/>
                <Route exact path="/contactus" component={Contact} />
                <Redirect to="/home" />
              </Switch>
          </div>
          <Footer />
      </div>
    );
  }
}

// //SUPPOSED TO BE DISH DETAIL.
// const DishDetail =({dish})=>{
//   return(
//     <div className="row">
//       {
//           dish?
//           <div className="col-12 col-md-5 m-1">
//                   <Card>
//                     <CardImg top src={dish.image} alt={dish.name}/>
//                     <CardBody>
//                       <CardTitle>{dish.name}</CardTitle>
//                       <CardText>{dish.description}</CardText>
//                     </CardBody>
//                   </Card>
//           </div>
//           :<div></div>
//         }

//         {
//           dish?
//           <div className="col-12 col-md-5 m-1">
//             <CardComponent>
//               <CardBody>
//                 <CardTitle>Comments</CardTitle>
//                 {
//                   dish.comments.map(({id,comment,author,date})=>{
//                     return (
//                       <div key={id}>
//                         <CardText>{comment}</CardText>
//                         <CardText>
//                           --{author},  
//                           {new Intl.DateTimeFormat('en-US', 
//                           { year: 'numeric', month: 'short', day: '2-digit'})
//                           .format(new Date(Date.parse(date)))}
//                         </CardText>
//                       </div>
//                     );
//                   })
//                 }
//               </CardBody>
//             </CardComponent>
//           </div>
//           :<div></div>
//         }

//     </div>
//   );
// }

export default Main;
