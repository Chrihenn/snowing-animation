import React from 'react';
import Style from './index.module.css';

const Flake = () => {
  const style = {
    animationDelay: `${(Math.random() * 16).toFixed(2)}s`,
    animationDuration: `${Math.random() * 10 + 8}s`,
    fontSize: `${Math.floor(Math.random() * 10) + 10}px`,
  };
  return (
    <p className={Style.flake} style={style}>
      *
    </p>
  );
};

export default Flake;
