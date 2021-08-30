import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEMS,
  SET_ITEMS,
  TRASH_BUTTON,
} from "./constants";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item: {
      ...item,
      product: item.product || item,
    },
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    item,
  };
};

export const trashItem = (item) => {
  return {
    type: TRASH_BUTTON,
    item,
  };
};

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS,
  };
};

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    items,
  };
};
