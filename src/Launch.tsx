import * as S from "./Launch.styles";
import React from "react";
import { FirebaseContext } from "./contexts/FirebaseContext";
import { useHistory } from "react-router";

export interface LaunchProps {
  className?: string;
}

const Launch: React.FC<LaunchProps> = ({ className }) => {
  const { app, user, credential } = React.useContext(FirebaseContext);
  const history = useHistory();

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
          <S.LaunchButton
            onClick={async () => {
              if (credential) {
                window.location.href = `harbor://credential=${encodeURIComponent(
                  JSON.stringify(credential.toJSON())
                )}`;
                return;
              }

              const token = await user?.getIdToken();
              console.log("TOKEN:", token);
              console.log("TOKEN RESULT:", user?.getIdTokenResult());
              window.location.href = `harbor://token=${token}`;
            }}
          >
            Launch Harbor app
          </S.LaunchButton>
          <S.SwitchAccountsLinkWrapper>
            Not {user.displayName}?&nbsp;
            <S.SwitchAccountsLink
              onClick={async () => {
                await app.auth().signOut();
                history.push("/");
              }}
            >
              Sign in to a different account.
            </S.SwitchAccountsLink>
          </S.SwitchAccountsLinkWrapper>
        </>
      )}
    </S.Wrapper>
  );
};

export default Launch;
