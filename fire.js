import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyDvwPclOEvtAmYCsQXcypuuhd7z0Jo9My0",
    authDomain: "eazybook-45865.firebaseapp.com",
    projectId: "eazybook-45865",
    storageBucket: "eazybook-45865.appspot.com",
    messagingSenderId: "892214484892",
    appId: "1:892214484892:web:1e2d274c2a8b266442f259",
    measurementId: "G-8L5BZY46BW"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire ;