import React from "react";
import { RoundBtnStyle, RoundBtnStyleContainer } from "../../styles/bodyStyle";

const RoundButton = (props) => {
  return (
    <RoundBtnStyleContainer>
      <div>
        <RoundBtnStyle>{props.btnDescription}</RoundBtnStyle>
        <div>
          <p>
            {props.btnSubTitle}
            <br></br>
            {props.btnSubTitle2}
          </p>
        </div>
      </div>
    </RoundBtnStyleContainer>
  );
};

export default RoundButton;
