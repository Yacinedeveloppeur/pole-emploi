import React from "react";
import { RoundBtnStyle, RoundBtnStyleContainer } from "../../styles/bodyStyle";

const RoundButton = ({
  btnDescription,
  btnSubTitle,
  btnSubTitle2,
  hideBtn,
}) => {
  return (
    <RoundBtnStyleContainer className={hideBtn}>
      <div>
        <RoundBtnStyle>{btnDescription}</RoundBtnStyle>
        <div>
          <p>
            {btnSubTitle}
            <br></br>
            {btnSubTitle2}
          </p>
        </div>
      </div>
    </RoundBtnStyleContainer>
  );
};

export default RoundButton;
