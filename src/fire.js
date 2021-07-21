import firebase from 'firebase'

 var firebaseConfig = {
  apiKey: "AIzaSyBJBy7cUdX81_2tVTiEMaozmk943dZMcCs",
  authDomain: "login-1c14b.firebaseapp.com",
  projectId: "login-1c14b",
  storageBucket: "login-1c14b.appspot.com",
  messagingSenderId: "73262109548",
  appId: "1:73262109548:web:48bebc10b3639e2f31d949"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;