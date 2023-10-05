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
  const db = getFirestore(app);

  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;

  if (!userId) {
    return {
      isActive: false,
      subscriptionName: "",
    };
  }

  const subscriptionsRef = userId
    ? collection(db, "customers", userId, "subscriptions")
    : null;

  const activeStatusQuery = useMemo(() => {
    if (subscriptionsRef) {
      return query(
        subscriptionsRef,
        where("status", "in", ["trialing", "active"])
      );
    }
    return null;
  }, [subscriptionsRef]);

  const [subscriptionData, setSubscriptionData] = useState({
    isActive: false,
    subscriptionName: "",
  });

  useEffect(() => {
    if (!userId || !activeStatusQuery) return;

    const unsubscribe = onSnapshot(
      activeStatusQuery,
      (snapshot) => {
        if (snapshot.docs && snapshot.docs.length > 0) {
          setSubscriptionData({ isActive: false, subscriptionName: "" });
        } else {
          const subscriptionDataResponse = snapshot.docs[0].data();
          const subscriptionName =
            subscriptionDataResponse.items[0]?.price?.product?.name || "";
          setSubscriptionData({ isActive: true, subscriptionName });
        }
      },
      (error) => {
        console.error("Error fetching subscription data:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [userId, activeStatusQuery]);

  return subscriptionData;
};
