import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.in} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>

                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    if (comments != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Commments</h4>
            
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.updatedAt)))}</p>
                            </li>
                        );
                    })}
                </ul>
                
            </div>
        );
}

const DishDetail = (props) => {
if(props.dish !=null){}
    return (
                <div class="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comment} />
                        </div>
                    </div>
                    </div>
    );
}



export default DishDetail;