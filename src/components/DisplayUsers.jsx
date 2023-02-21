import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const HandleDelete = (id) => {
    console.log(id);
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      {data.map((userName, id) => {
        return (
          <li key={id}>
            <h3>{userName}</h3>
            <button className="btn" onClick={() => HandleDelete(id)}>
              delete
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
  }

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export default DisplayUsers;
