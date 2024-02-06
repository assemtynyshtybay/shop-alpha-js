import React from "react";
import Card from "../Card/Card";
import "./Cards.sass";
const Cards = ({ items }) => {
  console.log(items);
  return (
    <div className="cards__wrapper">
      {items?.length === 0 ? (
        <div>Данных нет</div>
      ) : (
        items?.map((item) => <Card key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Cards;
