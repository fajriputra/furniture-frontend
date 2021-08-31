import {
  ADD_ITEM,
  INCREMENT,
  DECREMENT,
  CLEAR_ITEMS,
  SET_ITEMS,
  REMOVE_ITEM,
} from "./constants";
import { toast } from "react-toastify";

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      item: {
        ...item,
        product: item.product || item,
      },
    });
    toast.success("Item has added to cart");
  };
};

export const incrementItem = (item) => {
  return {
    type: INCREMENT,
    item,
  };
};

export const decrementItem = (item) => {
  return {
    type: DECREMENT,
    item,
  };
};

export const trashItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM,
      item,
    });
    toast.success("Item has been removed");
  };
};

export const clearItems = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ITEMS });
    toast.success("All item has been removed");
  };
};

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    items,
  };
};
