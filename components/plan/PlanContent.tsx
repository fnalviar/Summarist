import useAuth from "@/hooks/useAuth";
import { createCheckoutSession } from "@/stripe/createCheckoutSession";
import { useState } from "react";
import { FaHandshake } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";

function PlanContent() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [activePlan, setActivePlan] = useState<string>("yearly");
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handleActivePlan = (planName: string) => {
    setActivePlan(planName);
    setSelectedPlan(planName);
  };

  const subscribeToPlan = () => {
    if (!user) return;

    setLoading(true);

    const priceId =
      selectedPlan === "yearly"
        ? "price_1Nm2ujFFiX3mGzMGMtZmu8Eu"
        : "price_1Nm2vUFFiX3mGzMGo53a8kyl";

    createCheckoutSession(user.uid, priceId);
  };

  return (
    <div className="row">
      <div className="container">
        <div className="plan__features__container">
          <div className="plan__features">
            <figure className="plan__features--icon">
              <IoDocumentTextSharp />
            </figure>
            <div className="plan__features__description">
              <b>Key ideas in few min </b>
              with many books to read
            </div>
          </div>
          <div className="plan__features">
            <figure className="plan__features--icon">
              <RiPlantFill />
            </figure>
            <div className="plan__features__description">
              <b>3 million </b>
              people growing with Summarist everyday
            </div>
          </div>
          <div className="plan__features">
            <figure className="plan__features--icon">
              <FaHandshake />
            </figure>
            <div className="plan__features__description">
              <b>Precise recommendations </b>
              collections curated by experts
            </div>
          </div>
        </div>

        <div className="section__title">Choose the plan that fits you</div>

        {["yearly", "monthly"].map((plan) => (
          <>
            <div
              key={plan}
              className={`plan__card ${
                activePlan === plan ? "plan__card--active" : ""
              }`}
              onClick={() => handleActivePlan(plan)}
            >
              <div className="plan__card--circle">
                <div
                  className={`${activePlan === plan ? "plan__card--dot" : ""}`}
                ></div>
              </div>
              <div className="plan__card--content">
                <div className="plan__card--title">
                  {plan === "yearly" ? "Premium Plus Year" : "Premium Monthly"}
                </div>
                <div className="plan__card--price">
                  {plan === "yearly" ? "$99.99/year" : "$9.99/month"}
                </div>
                <div className="plan__card--description">
                  {plan === "yearly"
                    ? "7-day free trial included"
                    : "No trial included"}
                </div>
              </div>
            </div>
            <div className="auth__separator plan__card--separator">
              <span className="auth__separator--text">or</span>
            </div>
          </>
        ))}

        <div className="plan__card--trial">
          {activePlan === "yearly" ? (
            <>
              <span className="plan__btn--container">
                <button className="btn plan__btn" onClick={subscribeToPlan}>
                  <span>Start your free 7-day trial</span>
                </button>
              </span>
              <div className="plan__disclaimer">
                {
                  "Cancel your trial at any time before it ends, and you won’t be charged."
                }
              </div>
            </>
          ) : (
            <>
              <span className="plan__btn--container">
                <button className="btn plan__btn" onClick={subscribeToPlan}>
                  <span>Start your first month</span>
                </button>
              </span>
              <div className="plan__disclaimer">
                30-day money back guarantee, no questions asked.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlanContent;
