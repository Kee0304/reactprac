import { useState } from "react";

function SynText() {
  const [items] = useState([]);

  let todoItems = items.length > 0 && (
    <div>
      <div>
        {items.map((item) => (
          `${item} 테스트 `
        ))}
      </div>
    </div>
  );
  return (
    <div className="App">
      <div>
        <div className="TodoList">todoItems는 {todoItems}</div>
      </div>
    </div>
  );
}

export default SynText;