import useAuth from "@/hooks/useAuth";
import useSubscription from "@/hooks/useSubscription";
import payments from "@/lib/stripe";
import { Product, getProducts } from "@stripe/firestore-stripe-payments";
import { useState } from "react";
import { FaHandshake } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";

interface Props {
  products: Product[];
}

function PlanContent({ products }: Props) {
  const { user, logout, loading } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(false);

  console.log("products at PlanContent", products);

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

        <div className="plan__card plan__card--active">
          <div className="plan__card--circle">
            <div className="plan__card--dot"></div>
          </div>
          <div className="plan__card--content">
            {products &&
              products.map((product) => (
                <div key={product?.id} className="plan__card--content">
                  <div className="plan__card--title">{product?.name}</div>
                  <div className="plan__card--price">
                    ${product.prices[0].unit_amount! / 100}
                  </div>
                  <div className="plan__card--description">
                    {product?.description}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="auth__separator plan__card--separator">
          <span className="auth__separator--text">or</span>
        </div>

        <div className="plan__card">
          <div className="plan__card--circle">
            <div className="plan__card--dot"></div>
          </div>
          <div className="plan__card--content">
            <div className="plan__card--title">Premium Monthly</div>
            <div className="plan__card--price">$9.99/month</div>
            <div className="plan__card--description">No trial included</div>
          </div>
        </div>

        <div className="plan__card--trial">
          <span className="plan__btn--container">
            <button className="btn plan__btn">
              <span>Start your free 7-day trial</span>
              <span>Start your first month</span>
            </button>
          </span>
          <div className="plan__disclaimer">
            Cancel your trial at any time before it ends, and you won’t be
            charged.
          </div>
          <div className="plan__disclaimer">
            30-day money back guarantee, no questions asked.
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlanContent;

