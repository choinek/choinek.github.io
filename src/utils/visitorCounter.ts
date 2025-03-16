import { db } from "../firebase";
import { doc, setDoc, increment, serverTimestamp } from "firebase/firestore";

export const incrementVisitorCount = async (): Promise<void> => {
  const visitorRef = doc(db, "counter", "visitor");

  try {
    await setDoc(
      visitorRef,
      {
        count: increment(1),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
    console.log("Visitor count incremented.");
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
  }
};
