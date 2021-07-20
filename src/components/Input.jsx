import React from "react";
import DragHandle from "./DragHandle";

function Input({ draggableProps, drag, inputfor }) {
  return (
    <div {...draggableProps} className="form-style">
      <DragHandle {...drag} />
      <form>
        {inputfor.map((item, i) => (
          <input type="text" key={i} placeholder={item}></input>
        ))}
      </form>
    </div>
  );
}

export default Input;
