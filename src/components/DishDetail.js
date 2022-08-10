import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";


const DishDetail = (props) => {
    const { dish } = props;
    console.log(props.dish);
  const renderDish = (dish) => {
    return (
      <div className="col-12 col-md-5 mt-1">
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody body className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  const renderComments = dish.comments.map((comment) => {
    return (
      <div>
        <ul>
          <li style={{ listStyle: "none" }}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author},{comment.date}
            </p>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="row">
      {renderDish(dish)}
      <div className="col-12 col-md-5 mt-1">
        <h3 style={{ marginLeft:"38px"}}>Comments</h3>
        {renderComments}
      </div>
    </div>
  );
};

export default DishDetail;
