import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

export const useSubscription = (app: FirebaseApp) => {
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;

  if (!userId) throw new Error("User not logged in");

  const db = getFirestore(app);
  const subscriptionsRef = collection(db, "customers", userId, "subscriptions");

  const activeStatusQuery = useMemo(() => {
    return query(
      subscriptionsRef,
      where("status", "in", ["trialing", "active"])
    );
  }, [subscriptionsRef]);

  const [subscriptionData, setSubscriptionData] = useState({
    isActive: false,
    subscriptionName: "",
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(
      activeStatusQuery,
      (snapshot) => {
        if (snapshot.docs.length === 0) {
          setSubscriptionData({ isActive: false, subscriptionName: "" });
        } else {
          const subscriptionData = snapshot.docs[0].data();
          const subscriptionName =
            subscriptionData.items[0].price.product.name || null;
          setSubscriptionData({ isActive: true, subscriptionName });
          
          console.log("subscriptionData", subscriptionData);
        }
      },
      (error) => {
        console.error("Error fetching subscription data:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [userId]);

  return subscriptionData;
};
