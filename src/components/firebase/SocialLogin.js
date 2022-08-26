import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./firebase.init";
import Loading from "../shared/Loading";
import { useEffect } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { setEmail } from "../../global-state/actions/reduxActions";

const SocialLogin = ({ children }) => {
  const dispatch = useDispatch()
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
          const accessToken = res.data.accessToken;
          const ttl = res.data.ttl;
          const now = new Date()

          // `item` is an object which contains the original value
          // as well as the time when it's supposed to expire
          const item = {
            accessToken: accessToken,
            expiry: now.getTime() + ttl,
            email: userInfo.email
          }
          localStorage.setItem("token", JSON.stringify(item))
          dispatch(setEmail(userInfo.email))
          navigate(from, { replace: true })
        }
      }
      saveUser();
    }
  }, [dispatch, from, navigate, user])

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
        <img style={{ width: "25px" }} src="https://i.ibb.co/xXCkjSm/Google-G-Logo-svg.png" alt="" />
        {children} Google
      </button>
      {signInError}
    </>
  );
};

export default SocialLogin;
