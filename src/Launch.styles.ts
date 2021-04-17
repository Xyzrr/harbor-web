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

export const UserCard = styled.div`
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 12px 16px;
  max-width: 360px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 48px;
  margin-right: 12px;
`;
export const FakeUserPhoto = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  font-size: 24px;
  color: white;
  background: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DisplayName = styled.div`
  font-size: 18px;
`;
export const UserEmail = styled.div`
  color: #666;
  font-size: 14px;
`;

export const LaunchButton = styled.a`
  max-width: 360px;
  padding: 20px 28px;
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
