import React from "react";
import { ButtonsProps } from "./ButtonsProps";

const Buttons: React.FC<ButtonsProps> = React.memo(
  ({ addRandomNumber, onStart, onStop, started }) => {
    console.log("render Buttons");
    return (
      <div className="buttons">
        <button onClick={addRandomNumber}>Новое число</button>
        <br />
        <button disabled={started} onClick={onStart}>
          Старт
        </button>
        <button onClick={onStop}>Стоп</button>
      </div>
    );
  }
);

export default Buttons;
