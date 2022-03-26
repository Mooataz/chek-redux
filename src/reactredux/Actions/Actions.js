import {
  ADD_ITEM,
  FILTRED_ITEM,
  EDIT_ITEM,
  LIST_ITEM,
} from "../Constants/actionTypes";

export const addItem = (contact) => {
  return {
      type: ADD_ITEM,
      payload: contact,
  };
};
export const feltredItem = (id) => {
  return {
      type: FILTRED_ITEM,
      payload: id,
  };
};
export const editItem = (id) => {
  return {
      type: EDIT_ITEM,
      payload: id,
  };
};

export const getItem = (id) => {
  return {
      type: LIST_ITEM,
      payload: id,
  };
};