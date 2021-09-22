import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 65px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  background-color: white;
  padding: 8px;

  .logoContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 15px;

    .logoPoleEmploi {
      width: 130px;
      height: 45px;

      margin-right: 20px;
    }
    .logoRepublique {
      width: 73px;
      height: 64px;
    }
  }
  .logoConnectionContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    :hover {
      cursor: pointer;
    }
    .logoConnection {
      width: 50px;
      height: 45px;
    }
  }
`;
