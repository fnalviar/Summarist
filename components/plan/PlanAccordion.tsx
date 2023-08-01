import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionData {
  key: string;
  title: string;
  body: string;
}

function PlanAccordion() {
  const [showContent, setShowContent] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [showClassName, setShowClassName] = useState(false);
  const [addClassName, setClassName] = useState("");

  const handleAccordionClick = (cardKey: string) => {
    setShowContent((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
    setShowClassName((prev) => !prev);
  };

  const handleClassName = () => {
    setClassName("show--content");
  };

  const accordionData = [
    {
      key: "card1",
      title: "How does the free 7-day trial work?",
      body: " Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.",
    },
    {
      key: "card2",
      title:
        "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
      body: "   While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
    },
    {
      key: "card3",
      title: "What's included in the Premium plan?",
      body: "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.",
    },
    {
      key: "card4",
      title: "Can I cancel during my trial or subscription?",
      body: "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.",
    },
  ];

  return (
    <div className="faq__container">
      {accordionData.map(({ key, title, body }) => (
        <div className="accordion__card" key={key}>
          <div
            className="accordion__header"
            onClick={() => {
              handleAccordionClick(key);
              handleClassName;
            }}
          >
            <div className="accordion__title">{title}</div>
            {showContent[key] ? (
              <IoIosArrowDown className="arrow-down__icon arrow-up__icon" />
            ) : (
              <IoIosArrowDown className="arrow-down__icon" />
            )}
          </div>
          <div className={`accordion__collapse ${addClassName}`}>
            <div className="accordion__body">{body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PlanAccordion;
