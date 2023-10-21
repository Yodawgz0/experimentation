// Acomp.js
import React, { useContext } from "react";
import { AcompContext } from "../App";

export const Acomp = () => {
  const { numCHange, setNum } = useContext(AcompContext); // Access numCHange and setNumCHange from the context
  const handleIncrement = () => {
    setNum(numCHange + 1); // Increment numCHange
  };

  return (
    <div>
      <button onClick={handleIncrement}>Click to Increment</button>
    </div>
  );
};
