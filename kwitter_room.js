
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA4I1wy3xudWZkM5Ca7MOdFJYriYa_Dk_g",
      authDomain: "kwitter-4eba5.firebaseapp.com",
      databaseURL: "https://kwitter-4eba5-default-rtdb.firebaseio.com",
      projectId: "kwitter-4eba5",
      storageBucket: "kwitter-4eba5.appspot.com",
      messagingSenderId: "1083273372234",
      appId: "1:1083273372234:web:f83ea46fce232286367cb3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
