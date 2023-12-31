import app from "@/firebase";
import useAuth from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import Link from "next/link";
import SettingsLogin from "./SettingsLogin";

function SettingsComponent() {
  const { user } = useAuth();
  const subscription = useSubscription(app);

  const isUserPremium = subscription.isActive;
  const premiumStatusName = subscription.subscriptionName;

  if (subscription.isLoading) return;

  return (
    <div className="container">
      <div className="row">
        <div className="setting__title">Settings</div>
        {user ? (
          <>
            <div className="setting__info">
              <div className="setting__info--title">Your Subscription Plan</div>
              <div className="setting__info--subtitle">
                {isUserPremium ? (
                  premiumStatusName
                ) : (
                  <>
                    Basic
                    <Link
                      href="/choose-plan"
                      className="btn settings__upgrade--btn"
                    >
                      Upgrade to Premium
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="setting__info">
              <div className="setting__info--title">Email</div>
              {user?.email ? (
                <div className="setting__info--subtitle">{user?.email}</div>
              ) : (
                <div className="setting__info--subtitle">Guest</div>
              )}
            </div>
          </>
        ) : (
          <SettingsLogin />
        )}
      </div>
    </div>
  );
}
export default SettingsComponent;
