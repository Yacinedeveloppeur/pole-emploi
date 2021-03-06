import styled from "styled-components";
import banner from "../images/bodyImg/banner.jpg";

export const BodyContainer = styled.div`
  @media screen and (max-width: 1200px) {
    h1 {
      padding-left: 10px;
    }

    div {
      input {
        width: 140px;
        height: 38px;
      }
    }

    button {
      min-height: 30px;
    }
  }

  height: 350;
  div {
    display: flex;
  }

  button {
    cursor: pointer;
  }

  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position-y: center;
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
    padding-left: 8px;
    height: 58px;
    border-style: none;
    width: 280px;
    :focus {
      outline: none;
      box-sizing: border-box;
      border: 3px solid #6a8cc3;
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
    @media screen and (max-width: 1200px) {
      height: 42px;
      width: 38px;
    }
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

export const BackgroundBtn = styled.div`
  @media screen and (max-width: 1200px) {
    .hideBtn {
      display: none;
    }
  }
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 48%,
    rgba(0, 0, 0, 0.4) 48%,
    rgba(0, 0, 0, 0.4) 90%
  );
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const RoundBtnStyleContainer = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    padding-bottom: 0px;

    div {
      @media screen and (max-width: 768px) {
        padding-left: 5px;
        padding-right: 5px;
        margin: 0px 0px;
        font-size: 1em;
      }
      margin-bottom: 0px;
      margin-top: 0px;
      padding-bottom: 10px;
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
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  background: linear-gradient(#ff564c, #ff564c 10%);
  background-size: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
  width: 85px;
  height: 85px;
  border-style: none;
  margin: 20px;

  margin-bottom: 0px;

  border-radius: 100%;
  font-size: 2.4em;
  @media screen and (max-width: 768px) {
    margin: 10px;
    width: 70px;
    height: 70px;
    justify-content: space-between;
  }

  :hover {
    box-shadow: none;
    background: #ff5d53;
  }
`;

export const MainContainer = styled.div`
  @media screen and (max-width: 768px) {
  }
  margin-right: 10%;
  margin-left: 10%;

  div {
    .titleAndInput {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media screen and (max-width: 1200px) {
        flex-direction: column;
        text-align: center;
        margin-left: 0px;
      }
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
          padding-left: 5px;
          height: 31px;
          border-style: none;
          width: 300px;
          @media screen and (max-width: 1200px) {
            width: 250px;
            margin-bottom: 40px;
          }

          border: solid #999999 1px;
          :focus {
            outline: none;
            box-sizing: border-box;
            border: 1px solid #6a8cc3;
            height: 35px;
            width: 306px;
            @media screen and (max-width: 1200px) {
              width: 250px;
            }
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
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    box-shadow: 0 0 0.2em #aaa6a3;
    background-color: white;
    display: flex;

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
      h2 {
        font-weight: bold;
        font-size: 2em;
        color: orange;
        flex-wrap: wrap;
        margin-bottom: 0;
        padding-right: 10px;
      }

      display: flex;
      align-items: center;
      border-right: solid #adb5bd 1px;
      @media screen and (max-width: 1200px) {
        border-right: none;
      }
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
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 15px 0px;
  padding: 0px;

  div {
    @media screen and (max-width: 1200px) {
      width: 40%;
      min-height: 200px;
    }
    @media screen and (max-width: 768px) {
      width: 80%;
    }
    box-shadow: 0 0 0.2em #aaa6a3;
    margin: 25px 20px;
    background-color: white;
    width: 29%;
    display: flex;
    flex-wrap: wrap;
    min-height: 300px;
    background-color: white;

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
      padding-bottom: 10px;
    }

    div {
      height: 200px;
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
