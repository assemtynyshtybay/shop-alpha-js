import React, { useState } from "react";
import Button from "../../shop-ui/Button/Button";
import "./Card.sass";
const Card = ({ item }) => {
  const { name, price, sizes, unit } = item;
  const [cnt, setCnt] = useState(0);
  const [active, setActive] = useState(null);

  const chooseSize = (index) => {
    setActive(index);
  };

  return (
    <div className="card__wrapper">
      <div>Item: {name}</div>
      <label htmlFor="size">Size:</label>
      <div className="card-sizes" id="size">
        {sizes?.map((s, i) => (
          <Button
            key={s + i}
            title={s}
            onClick={() => chooseSize(i)}
            isActive={active === i}
          />
        ))}
      </div>
      <div className="card-sizes">
        Count: <Button onClick={() => cnt > 0 && setCnt(cnt - 1)} title="-" />
        {cnt}
        <Button onClick={() => setCnt(cnt + 1)} title="+" />
      </div>
      <div>
        Price: {price}
        {unit}
      </div>
      <Button title={"Add"} />
    </div>
  );
};

export default Card;
