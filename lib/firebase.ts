import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjqP55WAw6YImFe1HAHLn5qHWw5hcCN2w",
  authDomain: "sleek-d3f04.firebaseapp.com",
  projectId: "sleek-d3f04",
  storageBucket: "sleek-d3f04.appspot.com",
  messagingSenderId: "403385064329",
  appId: "1:403385064329:web:43b65f9984657817ab1f58",
  measurementId: "G-61DD53P7DH"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export const analytics = getAnalytics(app);
