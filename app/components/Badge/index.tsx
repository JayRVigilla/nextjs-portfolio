import React from "react";
import "./style.css";

type tProps = {
  title: string;
};

export const Badge = ({ title }: tProps) => {
// export const Badge = ({ title }) => {
  return <div className="root badge">
    <p>{title}</p>
  </div>;
};
