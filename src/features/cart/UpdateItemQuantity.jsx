import React from "react";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.string.isRequired,
  currentQuantity: PropTypes.number.isRequired, // Add currentQuantity prop validation
};

export default UpdateItemQuantity;
