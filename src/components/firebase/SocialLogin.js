import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./firebase.init";
import googleIcon from "../../assest/image/google-icon.svg";
import Loading from "../shared/Loading";
import { useEffect } from "react";
import axios from "axios"

const SocialLogin = ({ children }) => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();

  const handleSignUp = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    if (user) {
      const userInfo = {
        name: user.user.displayName,
        email: user.user.email,
      };

      const saveUser = async () => {
        const res = await axios.post(`https://morning-coast-54182.herokuapp.com/api/login`, userInfo)
        console.log(res);
        if (res.status === 200) {
          navigate(from, { replace: true })
        }
      }
      saveUser();
    }
  }, [from, navigate, user])

  if (loading) {
    return <Loading></Loading>;
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
