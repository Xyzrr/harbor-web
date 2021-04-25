import React from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase";

interface FirebaseUIContextValue {
  ui: firebaseui.auth.AuthUI;
}

export const FirebaseUIContext = React.createContext<FirebaseUIContextValue>(
  null!
);

const ui = new firebaseui.auth.AuthUI(firebase.auth());

export const FirebaseUIContextProvider: React.FC = ({ children }) => {
  return (
    <FirebaseUIContext.Provider value={{ ui }}>
      {children}
    </FirebaseUIContext.Provider>
  );
};
