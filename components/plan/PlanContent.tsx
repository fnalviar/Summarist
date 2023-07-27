import { FaHandshake } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";

function PlanContent() {
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
          <div className="section__title">Choose the plan that fits you</div>
        </div>
      </div>
    </div>
  );
}
export default PlanContent;
