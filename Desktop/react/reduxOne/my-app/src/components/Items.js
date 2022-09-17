import React from "react";
import { useDispatch } from "react-redux";

function Items() {
  const dispatch = useDispatch();

  const addItem = () => {
    // alert("You have added a new item")
    dispatch({ type: "ADD_ITEM" });
  };
  const removeItem = () => {
    // alert("You have deleted an item")
    dispatch({ type: "REMOVE_ITEM" });
  };
  return (
    <div>
      <button className="btn btn-success" onClick={addItem}>
        ADD ITEM
      </button>
      <button className="btn btn-danger" onClick={removeItem}>
        REMOVE ITEM
      </button>
    </div>
  );
}

export default Items;
