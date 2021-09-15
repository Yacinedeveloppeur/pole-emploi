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
    :focus {
      outline: none;
      box-sizing: border-box;
      border: 1px solid cyan;
    }
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
    rgba(0, 0, 0, 0) 48%,
    rgba(0, 0, 0, 0.4) 48%,
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
    p {
      font-size: 1.2em;
      text-align: center;
      flex-wrap: wrap;
      margin-top: 0px;
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
  font-size: 2.4em;

  :hover {
    box-shadow: none;
    background: #ff5d53;
  }
`;

export const MainContainer = styled.div`
  margin-right: 20%;
  margin-left: 20%;
  div {
    .titleAndInput {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      h1 {
        font-weight: normal;
        text-decoration: none;
        color: #414042;
        font-size: 3em;
      }

      margin-top: 40px;
      .inputAndSearchContainer {
        margin-left: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        input {
          height: 31px;
          border-style: none;
          width: 300px;

          border: solid #999999 1px;
          :focus {
            outline: none;
            box-sizing: border-box;
            border: 1px solid cyan;
            height: 35px;
            width: 306px;
          }
        }

        button {
          width: 35px;
          height: 35px;
          background-color: #787d84;
        }
      }
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

  .bigCard {
    background-color: white;
    display: flex;
    height: 200px;
    img {
      height: 150px;
    }
    padding: 5px;
    .firstBigCard {
      display: flex;
      align-items: center;
      border-right: solid #adb5bd 1px;
    }
    .secondBigCard {
      display: flex;
      align-items: center;
    }
  }
`;
