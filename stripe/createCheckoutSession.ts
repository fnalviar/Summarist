import { addDoc, collection, onSnapshot, DocumentData } from "firebase/firestore";
import getStripe from "./initializeStripe";
import { db } from "@/firebase";

export const createCheckoutSession = async (customerId: string, priceId: string) => {
  const checkoutSessionRef = await addDoc(
    collection(db, "customers", customerId, "checkout_sessions"),
    {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    }
  );
  onSnapshot(checkoutSessionRef, async (snapshot) => {
    const data = snapshot.data() as DocumentData;
    const sessionId = data?.sessionId; 
    if (sessionId) {
      const stripe = await getStripe();
      if (stripe) {
        stripe.redirectToCheckout({ sessionId });
      } else {
        console.error("Stripe is not initialized.");
      }
    } else {
      console.error("sessionId is missing or undefined.");
    }
  });
};
