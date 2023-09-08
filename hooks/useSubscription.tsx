import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

export const useSubscription = async (app: FirebaseApp) => {
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;
  
  if (!userId) throw new Error("User not logged in");

  const db = getFirestore(app);
  const subscriptionsRef = collection(db, "customers", userId, "subscriptions");

  const activeStatusQuery = query(
    subscriptionsRef,
    where("status", "in", ["trialing", "active"])
  );

  return new Promise<{ isActive: boolean; subscriptionName: string | null }>(
    (resolve, reject) => {
      const unsubscribe = onSnapshot(
        activeStatusQuery,
        (snapshot) => {
          // In this implementation, we only expect one active or trialing subscription to exist.
          if (snapshot.docs.length === 0) {
            console.log("No active or trialing subscriptions found");
            resolve({ isActive: false, subscriptionName: null });
          } else {
            // Assuming there's only one active/ trial subscription, you can get its name here
            const subscriptionData = snapshot.docs[0].data();
            const subscriptionName =
              subscriptionData.items[0].price.product.name || null;

            console.log("subscriptionData", subscriptionData);
            console.log("subscriptionName", subscriptionName);

            console.log("Active or trialing subscription found");
            resolve({ isActive: true, subscriptionName });
          }
          unsubscribe();
        },
        reject
      );
    }
  );
};
