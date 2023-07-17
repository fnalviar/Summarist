import { modalClose } from "@/redux/modalSlice";
import { RootState } from "@/redux/modalStore";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

function Authentication() {
  const [login, setLogin] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  const modal = useSelector((state: RootState) => state.modal.value);
  const dispatch = useDispatch();

  return (
    <div className="auth__wrapper">
      <div className="auth">
        {forgotPassword ? (
          <>
            <div className="auth__content">
              <div className="auth__header">Reset your password</div>

              <form action="" className="auth__form">
                <input
                  type="text"
                  className="auth__input"
                  placeholder="Email Address"
                />
                <button className="btn">
                  <span>Send reset password link</span>
                </button>
              </form>
            </div>

            <button
              className="no__account--btn"
              onClick={() => {
                setForgotPassword(false);
                setLogin(true);
              }}
            >
              Go to login
            </button>
          </>
        ) : login ? (
          <>
            <div className="auth__content">
              <div className="auth__header">Log in to Summarist</div>
              <button className="btn guest__btn--wrapper">
                <div className="guest__icon--wrapper facebook__icon--wrapper">
                  <BsFillPersonFill className="guest__icon" />
                </div>
                Login as a Guest
              </button>
              <div className="auth__separator">
                <span className="auth__separator--text">or</span>
              </div>
              <button className="btn google__btn--wrapper">
                <div className="guest__icon--wrapper">
                  <FcGoogle className="google__icon" />
                </div>
                Login with Google
              </button>

              <div className="auth__separator">
                <span className="auth__separator--text">or</span>
              </div>

              <form action="" className="auth__form">
                <input
                  type="text"
                  className="auth__input"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  className="auth__input"
                  placeholder="Password"
                />

                <button className="btn">
                  <span>Login</span>
                </button>
              </form>
            </div>
            <div
              className="auth__forgot--password"
              onClick={() => setForgotPassword(true)}
            >
              Forgot your password?
            </div>
            <button
              className="no__account--btn"
              onClick={() => setLogin(false)}
            >
              Don't have an account?
            </button>
          </>
        ) : (
          <>
            <div className="auth__content">
              <div className="auth__header">Sign up to Summarist</div>
              <button className="btn google__btn--wrapper">
                <div className="guest__icon--wrapper">
                  <FcGoogle className="google__icon" />
                </div>
                Sign up with Google
              </button>

              <div className="auth__separator">
                <span className="auth__separator--text">or</span>
              </div>

              <form action="" className="auth__form">
                <input
                  type="text"
                  className="auth__input"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  className="auth__input"
                  placeholder="Password"
                />

                <button className="btn">
                  <span>Sign Up</span>
                </button>
              </form>
            </div>

            <button className="no__account--btn" onClick={() => setLogin(true)}>
              Already have an account?
            </button>
          </>
        )}

        <div
          className="auth__close--btn"
          onClick={() => {
            dispatch(modalClose());
          }}
        >
          <AiOutlineClose className="auth__close--icon" />
        </div>
      </div>
    </div>
  );
}
export default Authentication;
