import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrXOdHfWYeD0QJXaS7o-vDhNDObO8zoAo",
    authDomain: "discord-clone-saad710.firebaseapp.com",
    projectId: "discord-clone-saad710",
    storageBucket: "discord-clone-saad710.appspot.com",
    messagingSenderId: "77902190995",
    appId: "1:77902190995:web:01fc5bdc969b32ae1ff066",
    measurementId: "G-C7SJYJ0FY6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;
