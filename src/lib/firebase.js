import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, EmailAuthProvider, GithubAuthProvider, PhoneAuthProvider, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
// import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore"; // for firestore database
import { getStorage } from "firebase/storage"; // for firebase storage

const firebaseConfig = {
  apiKey: "AIzaSyDe6qJLVdaTRrMuXq-MCvkQ0llnLkFUDaQ",
  authDomain: "ms-fb-001.firebaseapp.com",
  projectId: "ms-fb-001",
  storageBucket: "ms-fb-001.firebasestorage.app",
  messagingSenderId: "189472695194",
  appId: "1:189472695194:web:4b7e99ce3513d9c6add023"
};

const googleLogin = new GoogleAuthProvider();
const facebookLogin = new FacebookAuthProvider();
const githubLogin = new GithubAuthProvider();
const phoneLogin = new PhoneAuthProvider();
const emailLogin = new EmailAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleLogin);

    // The signed-in user info
    const user = result.user;
    console.log("Successfully logged in:", user.displayName, user.email);

    // Optional: Get the Google Access Token (useful if you need to access Google APIs like Drive or Calendar)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    return user;

  } catch (error) {
    // Handle Errors here.
    console.error("Error during sign-in:", error.message);
    const errorCode = error.code;
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
};

const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    
    // Optional: Add custom permissions if you need more than basic profile data
    // provider.addScope('user_birthday'); 

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // This gives you the Facebook Access Token to access the Facebook Graph API if needed
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      console.log("Logged in user:", user);
    } catch (error) {
      console.error("Facebook Sign-In Error:", error.message);
    }
  };

const signInWithPhone = async () => {
  try {
    const result = await signInWithPopup(auth, phoneLogin);

    // The signed-in user info
    const user = result.user;
    console.log("Successfully logged in:", user.displayName, user.email);

    // Optional: Get the Phone Access Token (useful if you need to access Phone APIs like Drive or Calendar)
    const credential = PhoneAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    return user;

  } catch (error) {
    // Handle Errors here.
    console.error("Error during sign-in:", error.message);
    const errorCode = error.code;
    const credential = PhoneAuthProvider.credentialFromError(error);
  }
};

const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubLogin);

    // The signed-in user info
    const user = result.user;
    console.log("Successfully logged in:", user.displayName, user.email);

    // Optional: Get the Github Access Token (useful if you need to access Github APIs like Drive or Calendar)
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    return user;

  } catch (error) {
    // Handle Errors here.
    console.error("Error during sign-in:", error.message);
    const errorCode = error.code;
    const credential = GithubAuthProvider.credentialFromError(error);
  }
};

const signInWithEmail = async () => {
  try {
    const result = await signInWithPopup(auth, emailLogin);

    // The signed-in user info
    const user = result.user;
    console.log("Successfully logged in:", user.displayName, user.email);

    // Optional: Get the Email Access Token (useful if you need to access Email APIs like Drive or Calendar)
    const credential = EmailAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    return user;

  } catch (error) {
    // Handle Errors here.
    console.error("Error during sign-in:", error.message);
    const errorCode = error.code;
    const credential = EmailAuthProvider.credentialFromError(error);
  }
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, signInWithEmail, signInWithGithub, signInWithFacebook, signInWithGoogle, signInWithPhone };