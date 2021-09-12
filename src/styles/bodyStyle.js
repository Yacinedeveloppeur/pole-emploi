import styled from "styled-components";
import banner from "../images/bodyImg/banner.jpg";

export const BodyContainer = styled.div`
  div {
    display: flex;
    width: 100%;
  }
  button {
    cursor: pointer;
  }
  background-image: url(${banner});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 400px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.3em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
  }
  input {
    height: 58px;
    border-style: none;
    width: 280px;
  }
  .inputAndSearchContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      display: flex;
      justify-content: center;
    }
  }
  .input1 {
    border-radius: 4px 0px 0px 4px;
    border-right: solid #adb5bd 1px;
    :focus {
      outline: none;
    }
  }
  .input2 {
    :focus {
      outline: none;
    }
  }
  .searchBtn {
    height: 60px;
    background-color: #ff5d53;
    color: white;
    width: 62px;
    border-radius: 0px 4px 4px 0px;
    border-style: none;
  }
  .inputCheckBoxContainer {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    .inputCheckBox {
      margin-right: 8px;
      width: 15px;
      height: 15px;
    }
  }
`;

export const RoundBtnStyleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 53%,
    rgba(0, 0, 0, 0.4) 53%,
    rgba(0, 0, 0, 0.4) 90%
  );

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0px;

    div {
      padding-top: 0px;
      margin-bottom: 0;
      padding-left: 50px;
      padding-right: 50px;
      padding-bottom: 10px;
      width: 100%;
    }
  }
`;

export const RoundBtnStyle = styled.button`
  background: linear-gradient(#ff9999, #ff5d53 10%);
  background-size: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
  width: 85px;
  height: 85px;
  border-style: none;
  margin: 20px;
  margin-top: 60px;
  border-radius: 100%;

  :hover {
    box-shadow: none;
    background: #ff5d53;
  }
`;
