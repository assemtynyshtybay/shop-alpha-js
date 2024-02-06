import React from "react";
import "./Button.sass";
const Button = ({ title, icon, isActive = false, ...props }) => {
  return (
    <button className={`button__wrapper ${isActive && "active"}`} {...props}>
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
