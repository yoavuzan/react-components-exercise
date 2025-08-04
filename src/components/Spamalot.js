import Spam from "./Spam";
import React, { Component } from "react";

const Spamalot = () => {
  let res = [];

  {
    Array.from({ length: 500 }).map(() => res.push(<Spam />));
  }
  return res;
};

export default Spamalot;
