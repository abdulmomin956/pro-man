import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./firebase.init";
import googleIcon from "../../assest/image/google-icon.svg";
import Loading from "../shared/Loading";

const SocialLogin = ({ children }) => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();

  const handleSignUp = async () => {
    await signInWithGoogle();
    
  };

  if (loading) {
    <Loading></Loading>;
  }
  
  if (user) {
    const userInfo = {
      name: user.user.displayName,
      email: user.user.email,
    };

    fetch("https://morning-coast-54182.herokuapp.com/api/reg", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });

     navigate(from, { replace: true })
  }

  let signInError;
  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  return (
    <>
      <button
        style={{ backgroundColor: "black" }}
        onClick={handleSignUp}
        className="btn text-white btn-outline "
      >
        <img style={{ width: "25px" }} src={googleIcon} alt="" />
        {children} Google
      </button>
      {signInError}
    </>
  );
};

export default SocialLogin;
