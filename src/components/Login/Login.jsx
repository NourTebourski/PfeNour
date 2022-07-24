import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, db, provider } from "../../utils/firebase";
import { actionTypes } from "../../utils/Reducer";
import { useStateValue } from "../../utils/StateProvider";
import React, { useRef } from "react";
function Login({ setUser }) {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign In
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        saveUser({
          name: result.user.displayName,
          photo: result.user.photoURL,
          uid: result.user.uid,
          email: result.user.email,
        });
      })
      .catch((error) => alert(error.message));
  };
  const saveUser = async (user) => {
    console.log("executedhere");
    const a = await db.collection("users").doc(user.uid).set(user);
    localStorage.setItem(
      "user",
      JSON.stringify({
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
        email: user.email,
      })
    );
    setUser(user);
  };
  React.useEffect(() => {
    // get user from localstorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
    }
  }, [setUser]);

  return (
    <div className="login">
      <div className="login__logo">
        <img src="logoKarriery.png" alt="" style={{ marginBottom: "50px" }} />

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
