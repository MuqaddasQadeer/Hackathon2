// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth , 
onAuthStateChanged ,
createUserWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAT7IK0eBMVYWASMQw94HuH0ubfNZekb9s",
  authDomain: "hackathon-prep-739c5.firebaseapp.com",
  projectId: "hackathon-prep-739c5",
  storageBucket: "hackathon-prep-739c5.firebasestorage.app",
  messagingSenderId: "326479090598",
  appId: "1:326479090598:web:01e2129617f11659353567",
  measurementId: "G-42J2JG3Y25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//get id's
const signup_email = document.getElementById('signup_email');
const signup_password= document.getElementById('signup_password');
const btn= document.getElementById('btn');

const signin_email = document.getElementById('signin_email');
const signin_password= document.getElementById('signin_password');
const btn_2= document.getElementById('btn_2');




btn.addEventListener("click",createUserAccount);
btn_2.addEventListener("click",signIn);
logout_btn.addEventListener("click",logout)

onAuthStateChanged(auth, (user) => {
  if (user) {
      console.log('user is logged in');
    const uid = user.uid;
  } else {
    console.log('user is not logged in');
  }
});
function createUserAccount (){
  // console.log("email=>",signup_email.value);
  // console.log("password=>",signup_password.value);
  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  console.log('user=>',user);
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);
  // ..
});
}
function signIn() {
signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
.then((userCredential) => {
 // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  });
}