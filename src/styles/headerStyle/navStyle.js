import styled from "styled-components";

export const NavList = styled.div`
  margin-left: -400px;
  padding: 40px;
  padding-top: 15px;
  height: 200px;
  width: 500px;
  background-color: white;
  z-index: 1;
  font-size: 1.1em;
  ul {
    color: gray;

    li {
      border-bottom: solid lightgray 1px;
      :first-child {
        i {
          color: red;
        }
      }
      margin: 10px;
      padding: 10px;
      color: black;
      i {
        font-size: 1.4em;
        margin-right: 15px;
      }
      :hover {
        background-color: lightgray;
        cursor: pointer;
      }
    }
  }
`;

export const NavContainer = styled.div`
  border-left: solid #adb5bd 1px;

  min-height: 80px;
  display: flex;

  align-items: center;

  #menu_checkbox {
    display: none;
  }

  p {
    margin-top: 0.7px;
  }

  label {
    margin-right: 10px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    padding-left: 20px;
  }
  label:before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #adb5bd;
    transition: 1.2s cubic-bezier(0, 0.96, 1, 0.02) background-color;
  }
  label div {
    position: relative;
    top: 0;
    height: 0.24em;
    background-color: #adb5bd;
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
    transform-origin: 30px;
  }

  label div:nth-child(2) {
    right: 0;
    width: 30px;
    height: 0.24em;
  }

  #menu_checkbox:checked + label:before {
    background-color: #4caf50;
  }

  #menu_checkbox:checked + label div:first-child {
    top: -0.5px;
    width: 30px;
    transform: rotateZ(45deg);
  }

  #menu_checkbox:checked + label div:last-child {
    top: 12.3px;
    width: 27.8px;
    transform: rotateZ(45deg);
  }

  #menu_checkbox:checked + label div:nth-child(2) {
    width: 40px;
    top: 5px;
    right: 5px;
    transform: rotateZ(-45deg);
  }
`;
