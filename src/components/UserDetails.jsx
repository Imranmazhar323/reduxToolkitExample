import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name));
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">
            <h3>List of User Details</h3>
          </div>
          <button
            className="btn add-btn"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
`;

export default UserDetails;
