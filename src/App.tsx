import * as S from "./App.styles";

import React from "react";
import firebase from "firebase";
import "firebaseui/dist/firebaseui.css";
import { FirebaseContext } from "./contexts/FirebaseContext";
import { useHistory } from "react-router";
import { FirebaseUIContext } from "./contexts/FirebaseUIContext";

function App() {
  const { user, setCredential } = React.useContext(FirebaseContext);
  const { ui } = React.useContext(FirebaseUIContext);
  const history = useHistory();
  const firebaseUiWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (user) {
      history.push("/launch");
    }
  }, [user, history]);

  React.useEffect(() => {
    const firebaseUiWrapperEl = firebaseUiWrapperRef.current;
    if (firebaseUiWrapperEl == null) {
      return;
    }

    const uiConfig: firebaseui.auth.Config = {
      callbacks: {
        signInSuccessWithAuthResult(authResult) {
          console.log("AUTH RESULT", authResult);
          setCredential(authResult.credential);
          history.push("/launch");
          return false;
        },
      },
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: "<your-tos-url>",
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign("<your-privacy-policy-url>");
      },
    };

    ui.start(firebaseUiWrapperEl, uiConfig);
  }, [ui, history, setCredential]);

  return (
    <S.Wrapper>
      <S.Logo>Sign in to Harbor to continue</S.Logo>
      <div ref={firebaseUiWrapperRef}></div>
    </S.Wrapper>
  );
}

export default App;
