import { modalOpen } from "@/redux/modalSlice";
import { useDispatch } from "react-redux";

function SettingsLogin() {
  const dispatch = useDispatch();

  return (
    <div className="settings__login__container">
      <img
        src="https://summarist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.e313e580.png&w=3840&q=75"
        alt="Login"
      />
      <div className="settings__login--title">
        Log in to your account to see your details.
      </div>
      <button
        className="btn login--btn"
        onClick={() => {
          dispatch(modalOpen());
        }}
      >
        Login
      </button>
    </div>
  );
}
export default SettingsLogin;
