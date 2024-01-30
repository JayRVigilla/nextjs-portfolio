'use client'
/** BeamIn documentation
 */
import React, { ReactNode, useState } from "react";
// import { useBeamIn } from "./useBeamIn";
import "./BeamIn.css";

export interface BeamInProps {
children: ReactNode;
}

export const BeamIn = ({children}: BeamInProps) => {
const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);
  // const { toggle, isVisible } = useBeamIn({initialValue: false})

  return (
    <div className="beam-container">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        <div className={`beam ${isVisible ? "show" : ""}`}>
          {children}
      </div>
      </div>
      )
};
