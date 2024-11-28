import React from "react";
import List from "./components/List/List";

export default function App() {
  const [visibleList, setVisibleList] = React.useState(true);
  const [numbers, setNumbers] = React.useState([1, 2, 3]);

  const toggleVisibleList = () => {
    setVisibleList(!visibleList);
  };

  return (
    <div className="App">
      <button onClick={toggleVisibleList}>Показать / Скрыть список</button>
      <br />
      <br />
      {visibleList && <List numbers={numbers} setNumbers={setNumbers} />}
    </div>
  );
}
