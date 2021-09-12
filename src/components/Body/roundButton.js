import React from "react";
import { RoundBtnStyle, RoundBtnStyleContainer } from "../../styles/bodyStyle";

const RoundButton = () => {
  return (
    <RoundBtnStyleContainer>
      <div>
        <RoundBtnStyle>Round</RoundBtnStyle>
        <div>
          <p>M'actualiser</p>
        </div>
      </div>
    </RoundBtnStyleContainer>
  );
};

export default RoundButton;
