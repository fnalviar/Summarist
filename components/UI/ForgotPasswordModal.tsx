import useAuth from "@/hooks/useAuth";
import { RootState } from "@/redux/modalStore";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface Inputs {
  email: string;
  password: string;
}

function ForgotPasswordModal() {
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
          <div className="auth__header">Reset your password</div>

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
      </div>
    </div>
  );
}
export default ForgotPasswordModal;
