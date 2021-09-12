import styled from "styled-components";
import banner from "../images/bodyImg/banner.jpg";

export const BodyContainer = styled.div`
  button {
    cursor: pointer;
  }
  background-image: url(${banner});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 450px;
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
  .input1 {
    border-radius: 4px 0px 0px 4px;
    border-right: solid #adb5bd 1px;
  }
  .input2 {
  }
  .searchBtn {
    height: 58px;
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

export const RoundBtnStyle = styled.button`
  background: linear-gradient(#ff9999, #ff5d53 10%);
  /* border: solid rgba(128, 128, 128, 0.4) 4px; */

  background-size: 200px;
  color: white;
  width: 85px;
  height: 85px;
  border-style: none;
  margin: 20px;
  margin-top: 60px;
  border-radius: 100%;
`;
