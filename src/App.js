import "./styles.css";

import { useState } from "react";

export default function MyApp() {
  const [count, setcount] = useState(0);

  //onclick event handler
  function handleClick() {
    setcount(count + 1);
  }
  return (
    <div>
      <h1>three same buttons</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
