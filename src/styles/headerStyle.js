import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px;

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
    margin-right: 20px;
    .logoConnection {
      width: 50px;
      height: 45px;
    }
  }
`;

export const CarouselContainer = styled.div`
  background-color: red;
`;
export const NavContainer = styled.div`
  background-color: green;
  min-width: 105px;
  min-height: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;

  #menu_checkbox {
    display: none;
  }

  label {
    margin-right: 10px;
    background-color: #f44336;
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
  label:before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f44336;
    transition: 1.2s cubic-bezier(0, 0.96, 1, 0.02) background-color;
  }
  label div {
    position: relative;
    top: 0;
    height: 5px;
    background-color: #fff;
    margin-bottom: 6px;
    transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width,
      0.3s ease right;
    border-radius: 2px;
  }

  label div:first-child {
    transform-origin: 0;
  }

  label div:last-child {
    margin-bottom: 0;
    transform-origin: 50px;
  }

  label div:nth-child(2) {
    right: 0;
    width: 50px;
  }

  #menu_checkbox:checked + label:before {
    background-color: #4caf50;
  }

  #menu_checkbox:checked + label div:first-child {
    top: -6px;
    transform: rotateZ(45deg);
  }

  #menu_checkbox:checked + label div:last-child {
    top: 6px;
    transform: rotateZ(45deg);
  }

  #menu_checkbox:checked + label div:nth-child(2) {
    width: 65px;
    top: 0;
    right: 13px;
    transform: rotateZ(-45deg);
  }
`;
