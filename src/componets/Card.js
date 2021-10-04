import React from "react";

function card(props) {
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
    props.offTrigger();
  };

  const dragLeave = (e) => {
    alert("hi");
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      dragLeave={dragLeave}
    >
      {props.children}
    </div>
  );
}

export default card;
