import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;

  max-width: 650px;
  margin: 0 auto;
  margin-top: 12vh;
`;

export const Heading = styled.h2``;

export const LaunchButton = styled.a`
  max-width: 360px;
  padding: 20px 32px;
  border-radius: 8px;
  box-shadow: none;
  font-size: 18px;
  color: white;
  text-decoration: none;
  background: #1b95e0;
  font-weight: 600;
  &:hover {
    background: #1085d8;
  }
`;
