import PlanAccordion from "@/components/plan/PlanAccordion";
import PlanContent from "@/components/plan/PlanContent";
import PlanHeader from "@/components/plan/PlanHeader";

function ChoosePlan() {
  return (
    <div className="plan">
      <PlanHeader />
      <PlanContent />
      <PlanAccordion />
    </div>
  );
}

export default ChoosePlan;
