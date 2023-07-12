import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

function Authentication() {
  return (
    <div className="auth__wrapper">
      <div className="auth">
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
        <div className="auth__forgot--password">Forgot your password?</div>
        <button className="no__account--btn">Don't have an account?</button>
        <div className="auth__close--btn">
          <AiOutlineClose className="auth__close--icon" />
        </div>
      </div>
    </div>
  );
}
export default Authentication;
