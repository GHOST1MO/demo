import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class Dishdetail extends Component {

    renderComments(comments) {
        if (comments == null)
            return (<div></div>);
        const c=comments.map((comment) => {
            return (
                <li className="m-1">{comment.comment}<br /> <br />-- {comment.author}, {comment.date}<br /><br /></li> 
            );
        });
        return(
            <div>
                <h4>comments </h4>
                <ul className="list-unstyled">
                    {c}
                </ul>
                
            </div>
        );
    }
    renderDish(dish) {
        if (dish != null)
        {

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-5 m-1">
                            <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>


                    </div>
                </div>

            );
            
        }
        else
            return (
                <div></div>
            );
            
    }
    render() {
        

        return (
            <div className="row">
                <div className="col-12 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
            </div>

        );
    }
}

export default Dishdetail;