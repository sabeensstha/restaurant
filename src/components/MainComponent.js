import React, { useState } from "react";
import Home from "./HomeComponent";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Contact from "./Contact";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [dishes, setdishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [selectedDish, setSelectedDish] = useState(null);
  function onDishSelect(dishId) {
    setSelectedDish(dishId);
  }
  const renderDish = (dish) => {
    if (dish != null)
      return (
        <DishDetail dish={dishes.filter((dis) => dis.id === selectedDish)[0]} />
      );
    else return <div></div>;
  };
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home dishes={dishes.filter((dish) => dish.featured)[0]}
        promotions={promotions.filter((promo) => promo.featured)[0]}       
        leaders={leaders.filter((leader) => leader.featured)[0]}       
        />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/menu" element={<Menu dishes={dishes} />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
