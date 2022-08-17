import React from "react";
import Home from "./HomeComponent";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Contact from "./Contact";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import About from "./About";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const Main = (props) => {
  const DishWithId = ({match}) => {
    return (
      <DishDetail
        dish={
          props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]
        }
        comments={props.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
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

export default withRouter(connect(mapStateToProps)(Main));
