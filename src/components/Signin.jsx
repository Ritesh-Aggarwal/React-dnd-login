import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Input from "./Input";
// import InputPhone from "./InputPhone";

function Signin({ method }) {
  const Emailform = (
    <Draggable draggableId="draggable-email" key="1" index="0">
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          <Input
            draggableProps={provided.draggableProps}
            drag={provided.dragHandleProps}
            inputfor={["Email", "Password"]}
          />
        </div>
      )}
    </Draggable>
  );
  const PhoneForm = (
    <Draggable draggableId="draggable-phone" key="2" index="1">
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          {/* <InputPhone {...provided.dragHandleProps} /> */}
          <Input
            draggableProps={provided.draggableProps}
            drag={provided.dragHandleProps}
            inputfor={["phone"]}
          />
        </div>
      )}
    </Draggable>
  );

  const [forms, setForms] = useState([Emailform, PhoneForm]);
  useEffect(() => {
    var arr = [];
    if (method.email) {
      arr.push(Emailform);
    }
    if (method.phone) {
      arr.push(PhoneForm);
    }
    setForms(arr);
    // eslint-disable-next-line
  }, [method]);

  function handleDrag(p) {
    if (p.destination?.index === p.source.index) return;
    else if (p.destination?.index) {
      const items = Array.from(forms);
      const [reorderitems] = items.splice(p.source.index, 1);
      items.splice(p.destination.index, 0, reorderitems);
      setForms(items);
    }
  }

  return (
    <DragDropContext onDragEnd={handleDrag} className=" border">
      <Droppable droppableId="droppable-1">
        {(provided, _) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {forms}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Signin;
