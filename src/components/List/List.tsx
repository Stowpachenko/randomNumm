import React, { useRef, useCallback } from "react";
import Buttons from "../Buttons/Buttons";
import { ListProps } from "./ListProps";

const List: React.FC<ListProps> = ({ numbers, setNumbers }) => {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isStarted = useRef(false);

  // random number
  const addRandomNumber = useCallback(() => {
    const random = Math.round(Math.random() * 10);
    setNumbers((prev) => [...prev, random]);
  }, [setNumbers]);

  // start timer
  const start = useCallback(() => {
    if (!isStarted.current) {
      timerRef.current = setInterval(addRandomNumber, 1000);
      isStarted.current = true;
    }
  }, [addRandomNumber]);

  // stop timer
  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      isStarted.current = false;
    }
  }, []);

  return (
    <div className="list">
      <Buttons
        started={isStarted.current}
        addRandomNumber={addRandomNumber}
        onStart={start}
        onStop={stop}
      />
      <ul>
        {numbers.map((num, index) => (
          <li key={`${index}_${num}`}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
