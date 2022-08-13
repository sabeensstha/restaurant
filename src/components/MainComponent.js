import React, { useState } from "react";
import Home from "./HomeComponent";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [dishes, setdishes] = useState(DISHES);
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
        <Route path="/home" element={<Home />} />
        <Route exact path="/menu" element={<Menu dishes={dishes} />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
