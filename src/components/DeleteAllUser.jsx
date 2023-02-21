import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const HandleClear = () => {
    dispatch(deleteUser());
  };

  return (
    <div>
      <button className="btn" onClick={HandleClear}>
        Clear All
      </button>
    </div>
  );
};
