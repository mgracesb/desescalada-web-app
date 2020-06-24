import React from "react";
import Confetti from "react-confetti";

export default (props) => {
  const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: "0.05",
    duration: "5760",
    stagger: "5",
    width: "10px",
    height: "31px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return <Confetti config={config} />;
};
