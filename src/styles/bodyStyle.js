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
  background: linear-gradient(#ff564c, #ff564c 10%);
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
    box-shadow: 0 0 0.2em #aaa6a3;
    background-color: white;
    display: flex;
    height: 200px;
    button {
      padding: 10px;
      font-size: 1em;
      border-radius: 20px;
      border: solid gray 1px;
      background-color: white;
      color: gray;
      :hover {
        background-color: gray;
        color: white;
        cursor: pointer;
      }
    }
    p {
      font-size: 1.2em;
    }
    img {
      height: 150px;
    }
    padding: 8px;
    .firstBigCard {
      width: 50%;
      h2 {
        font-weight: bold;
        font-size: 2em;
        color: orange;
        flex-wrap: wrap;
        margin-bottom: 0;
      }

      display: flex;
      align-items: center;
      border-right: solid #adb5bd 1px;
    }
    .secondBigCard {
      display: flex;
      align-items: center;
      padding-left: 15px;
    }
  }
  .plusActu {
    margin-bottom: 40px;
    padding: 10px;
    font-size: 1em;
    border-radius: 20px;
    border: solid gray 1px;
    background-color: white;
    color: gray;
    :hover {
      background-color: gray;
      color: white;
      cursor: pointer;
    }
  }
  .secondSection {
    .btnPlusActuContainer {
      margin-top: 25px;

      display: flex;
      justify-content: center;
    }
  }
`;

export const CardStyleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  margin: 15px 0px;
  padding: 0px;

  div {
    box-shadow: 0 0 0.2em #aaa6a3;
    margin: 25px 20px;
    background-color: white;

    width: 29%;
    display: flex;
    flex-wrap: wrap;
    min-height: 300px;
    background-color: white;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.2em;
    h3 {
      padding: 0px 15px;
      margin-bottom: 0px;
      color: black;
      font-size: 1.5em;
      font-weight: normal;
    }
    p {
      margin-bottom: auto;
      padding: 0px 15px;
    }

    div {
      width: 100%;
      background-color: green;
      margin: 0px;
      padding: 0px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
`;
