import React, { useState } from "react";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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
      <Menu dis={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      {renderDish(selectedDish)};
      <Footer />
    </div>
  );
};

export default Main;
