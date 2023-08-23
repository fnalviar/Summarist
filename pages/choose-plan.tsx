import PlanAccordion from "@/components/plan/PlanAccordion";
import PlanContent from "@/components/plan/PlanContent";
import PlanHeader from "@/components/plan/PlanHeader";
import payments from "@/lib/stripe";
import { Product, getProducts } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
}

function ChoosePlan({ products }: Props) {
  return (
    <div className="plan">
      <PlanHeader />
      <PlanContent products={products} />
      <PlanAccordion />
    </div>
  );
}
export default ChoosePlan;

export const getServerSideProps = async () => {
  try {
    const products = await getProducts(payments, {
      includePrices: true,
      activeOnly: true,
    });

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
};
