import useAuth from "@/hooks/useAuth";
import { modalClose } from "@/redux/modalSlice";
import { RootState } from "@/redux/modalStore";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

interface Inputs {
  email: string;
  password: string;
}

function LoginModal() {
  const [login, setLogin] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  const modal = useSelector((state: RootState) => state.modal.value);
  const dispatch = useDispatch();

  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };
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

          {/* Registration */}
          <form
            action=""
            className="auth__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              className="auth__input"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />

            <input
              type="password"
              className="auth__input"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}

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
        <button className="no__account--btn" onClick={() => setLogin(false)}>
          {" Don't have an account?"}
        </button>

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
export default LoginModal;
