import * as S from "./Launch.styles";
import React from "react";

export interface LaunchProps {
  className?: string;
}

const Launch: React.FC<LaunchProps> = ({ className }) => {
  React.useEffect(() => {}, []);
  return (
    <S.Wrapper className={className}>
      <S.Heading>Successfully logged in!</S.Heading>
      <S.LaunchButton href="harbor://key=5">Launch Harbor app</S.LaunchButton>
    </S.Wrapper>
  );
};

export default Launch;
