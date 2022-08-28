import React, { useEffect, useState } from "react";
import Home from "./HomeComponent";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Contact from "./Contact";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import About from "./About";
import axios from "axios";
import { addComment } from "../redux/ActionCreator";

const a = "This is fun";
console.log(a);
console.log(a.replace("This", "JS")); 
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});
// var Arr1 = ["Banana", "Apple", "Chhery", "Grapes"];
// var Arr= [1, 100, 7, 2, 8, 3, 4, 5, 0, 9];

// for (var i = 1; i < Arr.length; i++)
//   for (var j = 0; j < i; j++)
//     if (Arr[i] < Arr[j]) {
//       var x = Arr[i];
//       Arr[i] = Arr[j];
//       Arr[j] = x;
//     }
// Arr1.sort(function (a, b) {
//   return a - b;
// });
// console.log(Arr);
// console.log(Arr1);

const Main = (props) => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62da3c449eedb6996369254e.mockapi.io/student/v1/students`)
      .then((response) => {
        setStudent(response.data);
      });
  }, []);
  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          props.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={props.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        addComment={props.addComment}
      />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home
            dishes={props.dishes.filter((dish) => dish.featured)[0]}
            promotions={props.promotions.filter((promo) => promo.featured)[0]}
            leaders={props.leaders.filter((leader) => leader.featured)[0]}
          />
        </Route>
        <Route path="/aboutus" exact>
          <About leaders={props.leaders} />
        </Route>
        <Route exact path="/menu" children={<Menu dishes={props.dishes} />} />
        <Route exact path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contact" children={<Contact />} />
        <Route exact path="*" children={<Home />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
