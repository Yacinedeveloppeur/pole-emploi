import styled from "styled-components";

export const FooterContainer = styled.div`
  @media screen and (max-width: 768px) {
  }
  background-color: #3e4249;
  div {
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      flex-direction: column;
      padding-right: 20%;
      padding-left: 20%;
    }

    @media screen and (max-width: 600px) {
      padding-left: 0%;
      padding-right: 0%;
    }

    background-color: #2b2e30;
    display: flex;
    justify-content: center;
    align-items: baseline;
    div {
      color: white;
      font-size: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        flex-direction: column;

        li {
          display: flex;
          align-items: center;
          @media screen and (max-width: 768px) {
            align-items: baseline;
          }
          flex-direction: column;

          .footerBorder1 {
            margin-top: 0px;
            background-color: black;
            width: 65px;
            height: 5px;
          }
          .footerBorder2 {
            margin-top: 0px;
            background-color: #289dbd;
            width: 65px;
            height: 5px;
          }
          .footerBorder3 {
            margin-top: 0px;
            background-color: #ff5950;
            width: 65px;
            height: 5px;
          }
          .footerBorder4 {
            margin-top: 0px;
            background-color: #599d78;
            width: 65px;
            height: 5px;
          }
          display: flex;
          justify-content: center;
          ul {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 70%;
          }
        }
      }
    }
  }
  .copyRightContainer {
    background-color: #3e4249;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 40px;
    button {
      margin-bottom: 30px;
      padding: 10px;
      font-size: 1em;
      border-radius: 20px;
      border-style: none;
      background-color: gray;
      color: white;
      :hover {
        background-color: #2b2e30;
        color: white;
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: white;
      }
    }
    p {
      color: white;
    }
  }
`;
