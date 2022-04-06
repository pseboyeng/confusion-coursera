/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component{

    state = {
        isModalOpen: false
    }

    handleSubmit = (values) => {
        // alert('Current State is : ' + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>

                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <br />
                                <Control.select model=".rating" name="rating"
                                                className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                </Control.select>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <br />
                                <Control.text class="form-control" model=".author"
                                              id="author"
                                              placeholder="Your Name"
                                              name="author"
                                              validators={{
                                            required, minLength:minLength(3),maxLength:maxLength(15)
                                        }} />
                                        <Errors className="text-danger" model=".author" show="touched" messages={{
                                            required:'Required ',
                                            minLength:'Must be greater than 2 characters',
                                            maxLength:'Must be 15 characters or less'
                                        }}/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Comment</Label>
                                <br />
                                <Control.textarea model=".comment" id="comment" name="comment" 
                                                  rows="6"
                                                  className="form-control"/>
                            </FormGroup>

                            <FormGroup>
                                    <Button onClick={this.toggleModal} type="submit" color="primary">
                                        Submit
                                    </Button>
                            </FormGroup>
                            
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function RenderDish({dish}){
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments, addComment, dishId}){
    if(comments != null){
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) =>{
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author},</p>
                            </li>
                        );
                    })}
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </ul>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if(props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} 
                                        addComment={props.addComment}
                                        dishId={props.dish.id}/>
                </div>
            </div>
        );
    }else{
        return(
            <di></di>
        );
    }
}

export default DishDetail;