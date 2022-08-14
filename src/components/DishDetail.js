import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const DishDetail = (props) => {
  const { dish, comments } = props;
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
  const renderComments = comments.map((comment) => {
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
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {renderDish(dish)}
        <div className="col-12 col-md-5 mt-1">
          <h3 style={{ marginLeft: "38px" }}>Comments</h3>
          {renderComments}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
