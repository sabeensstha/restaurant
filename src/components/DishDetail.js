import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const handleSubmit = (values) => {
  //   toggleModal();
  //   props.addComment(
  //     props.dishId,
  //     values.rating,
  //     values.author,
  //     values.comment
  //   );
  // };

  function RenderComments(props) {
    const CommentForm = () => {
      return (
        <div style={{ marginRight: "38px" }}>
          <Button outline onClick={toggleModal}>
            <span className="fa fa-edit fa-lg"></span> Submit Comment
          </Button>
        </div>
      );
    };
    return (
      <div className="col-12 col-md-5 mt-1">
        <h3 style={{ marginLeft: "38px" }}>Comments</h3>
        <ul>
          {props.comments.map((comment) => {
            return (
              <li style={{ listStyle: "none" }} key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  - {comment.author},{comment.date} , {comment.rating}
                </p>
              </li>
            );
          })}
        </ul>
        <CommentForm dishId={props.dishId} addComment={props.addComment} />
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toggleModal();
    alert(dish.id);
    alert(
      "Rating :" +
        " " +
        data.rating +
        " " +
        "Name :" +
        " " +
        data.author +
        " " +
        "Comment :" +
        " " +
        data.comment
    );
    props.addComment(
          dish.id,
          data.rating,
          data.author,
          data.comment
    )
  };
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
        <RenderComments
          comments={comments}
          addComments={props.addComments}
          dishId={dish.id}
        />
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Rating</label>
              <br />
              <select
                {...register("rating", { required: true })}
                className="form-control"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <label>Your Name</label>
              <br />
              <input
                aria-invalid={errors.author ? "true" : "false"}
                id="author"
                className="form-control"
                type="text"
                placeholder="Your Name"
                {...register("author", {
                  required: true,
                  max: 15,
                  min: 2,
                  maxLength: 10,
                  minLength: 3,
                })}
              />
              <br />
              {errors.author && errors.author.type === "required" && (
                <span role="alert" style={{ color: "red" }}>
                  This is required
                </span>
              )}
              {errors.author && errors.author.type === "maxLength" && (
                <span role="alert" style={{ color: "red" }}>
                  Must be 15 character or less.
                </span>
              )}
              {errors.author && errors.author.type === "minLength" && (
                <span role="alert" style={{ color: "red" }}>
                  Name should be greater than 2 character.
                </span>
              )}
              <br />
              <label>Your Comment</label>
              <br />
              <textarea
                className="form-control"
                {...register("comment", {
                  required: true,
                  max: 1000,
                  min: 0,
                })}
              />
              <br />

              <input type="submit" className="btn-primary" />
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default DishDetail;
