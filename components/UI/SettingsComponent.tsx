import { initFirebase } from "@/firebase";
import useAuth from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { modalOpen } from "@/redux/modalSlice";
import { RootState } from "@/redux/modalStore";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SettingsComponent() {
  const modal = useSelector((state: RootState) => state.modal.value);
  const dispatch = useDispatch();

  const app = initFirebase();
  const auth = getAuth(app);

  const { user } = useAuth();

  const [isPremium, setIsPremium] = useState(false);
  const [premiumStatusName, setPremiumStatusName] = useState("");

  useEffect(() => {
    const checkPremium = async () => {
      const subscriptionData = auth.currentUser
        ? await useSubscription(app)
        : { isActive: false, subscriptionName: null };

      setIsPremium(subscriptionData.isActive);
      setPremiumStatusName(subscriptionData.subscriptionName || "");
    };

    checkPremium();
  }, [app, auth.currentUser?.uid]);

  return (
    <div className="container">
      <div className="row">
        <div className="setting__title">Settings</div>
        {user ? (
          <>
            <div className="setting__info">
              <div className="setting__info--title">Your Subscription Plan</div>
              <div className="setting__info--subtitle">
                {isPremium ? (
                  premiumStatusName
                ) : (
                  <>
                    Basic
                    <a
                      href="/choose-plan"
                      className="btn settings__upgrade--btn"
                    >
                      Upgrade to Premium
                    </a>
                  </>
                )}
              </div>
            </div>
            <div className="setting__info">
              <div className="setting__info--title">Email</div>
              <div className="setting__info--subtitle">{user?.email}</div>
            </div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}
export default SettingsComponent;
