import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAznH-9Mj7tA_p77mrcN1rdEAZ2cZy2anU",
  authDomain: "tiktok---jornada-994ea.firebaseapp.com",
  projectId: "tiktok---jornada-994ea",
  storageBucket: "tiktok---jornada-994ea.appspot.com",
  messagingSenderId: "25304330853",
  appId: "1:25304330853:web:9d50816d4a2fe383764c8c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
