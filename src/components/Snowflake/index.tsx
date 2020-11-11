import React from "react";
import Flake from "./Flake";
import Style from "./index.module.css";

const Snowflake = () => {
  const arr = Array.from({ length: 200 });

  return (
    <div className={Style.container}>
      {arr.map(() => (
        <Flake key={Math.random()} />
      ))}
    </div>
  );
};

export default Snowflake;
