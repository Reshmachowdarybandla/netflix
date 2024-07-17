// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwwUFNNOuAGLnolVZOVI6IpfFm7bUzKqs",
  authDomain: "netflix-1e025.firebaseapp.com",
  projectId: "netflix-1e025",
  storageBucket: "netflix-1e025.appspot.com",
  messagingSenderId: "863199910225",
  appId: "1:863199910225:web:a975871cf1d001f00f9b70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export default firebase