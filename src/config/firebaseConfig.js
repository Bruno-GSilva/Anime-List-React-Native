import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZJYCdR5TV5uU4eDeacdzO-yhL9EJOpwk",
  authDomain: "animelist2-fff35.firebaseapp.com",
  databaseURL: "https://animelist2-fff35-default-rtdb.firebaseio.com",
  projectId: "animelist2-fff35",
  storageBucket: "animelist2-fff35.appspot.com",
  messagingSenderId: "66792450447",
  appId: "1:66792450447:web:40a0cdbdefcc5f3f2d43fa",
  measurementId: "G-3L9F3E4CVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);