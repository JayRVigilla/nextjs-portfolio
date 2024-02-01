'use client'
/** BeamIn documentation
 */
import React, { ReactNode, useState } from "react";
import "./BeamIn.css";
import { useBeamIn } from "./useBeamIn";

export interface BeamInProps {
children: ReactNode;
}

export const BeamIn = ({ children }: BeamInProps) => {

// const [isVisible, setIsVisible] = useState(false);

  // const toggle = () => setIsVisible(!isVisible);
  const { isVisible, toggle } = useBeamIn({initialValue: false, countdown: .3});
  return (
    <div className="beam-container">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        <div className={`beam ${isVisible ? "show" : ""}`}>
          {children}
      </div>
      </div>
      )
};
