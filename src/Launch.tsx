import * as S from "./Launch.styles";
import React from "react";
import firebase from "firebase";
import { firebaseConfig } from "./firebase-config";

export interface LaunchProps {
  className?: string;
}

const Launch: React.FC<LaunchProps> = ({ className }) => {
  const [user, setUser] = React.useState<firebase.User | null>(null);
  React.useEffect(() => {
    const app = firebase.initializeApp(firebaseConfig);
    app.auth().onAuthStateChanged(setUser);
  }, []);
  return (
    <S.Wrapper className={className}>
      {user != null && (
        <>
          <S.Heading>Successfully logged in!</S.Heading>
          <S.UserCard>
            {user.photoURL ? (
              <S.UserPhoto src={user.photoURL}></S.UserPhoto>
            ) : (
              <S.FakeUserPhoto>
                {(user.displayName || "? ?")
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </S.FakeUserPhoto>
            )}
            <S.UserInfo>
              <S.DisplayName>{user.displayName}</S.DisplayName>
              <S.UserEmail>{user.email}</S.UserEmail>
            </S.UserInfo>
          </S.UserCard>
        </>
      )}
      <S.LaunchButton href="harbor://key=5">Launch Harbor app</S.LaunchButton>
    </S.Wrapper>
  );
};

export default Launch;
