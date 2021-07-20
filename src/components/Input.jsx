import React from "react";
import DragHandle from "./DragHandle";

function Input({ draggableProps, drag, inputfor }) {
  return (
    <div {...draggableProps} className="form-style center">
      <DragHandle {...drag} />
      <form onSubmit={(e) => console.log(e.target)}>
        {inputfor.map((item, i) => {
          if (item === "Password") {
            return <input type="password" key={i} placeholder={item}></input>;
          } else {
            return <input type="text" key={i} placeholder={item}></input>;
          }
        })}
      </form>
    </div>
  );
}

export default Input;
