import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkQVonGy_wXVvRtGv4v5-7gkIbk-UFnDg",
  authDomain: "trello-board-clone-d2658.firebaseapp.com",
  projectId: "trello-board-clone-d2658",
  storageBucket: "trello-board-clone-d2658.appspot.com",
  messagingSenderId: "471443942743",
  appId: "1:471443942743:web:dc00a548f488f6fbb26212",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, db, timestamp };
