//Connecting Firebase to Website
const firebaseApp = firebase.initializeApp({ 
apiKey: "AIzaSyBPSVGHHk1av5PjAeGsXosmkj4-JJADAvU",
authDomain: "property-listing-dypcet.firebaseapp.com",
projectId: "property-listing-dypcet",
storageBucket: "property-listing-dypcet.appspot.com",
messagingSenderId: "274004945809",
appId: "1:274004945809:web:0f2e5496edaccd534a0830",
measurementId: "G-YKFR1KGRS5"
});


var auth = firebaseApp.auth();

// Sign Up Fuction
 const signUp = ()=> {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    //const username = document.getElementById('username').value;
    console.log(email,password)

    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    //document.write("You are Signed Up!")
    console.log(result)
    alert("Success! You are Signed Up.Now click on Signin to continue.")
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    alert("Error: " + error.message)
    // ..
  });
 }


function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Sign-in successful
      console.log("Sign-in successful");
      // Redirect to homepage or perform other actions
    })
    .catch(function(error) {
      // Handle sign-in error
      var errorMessage = error.message;
      console.log("Sign-in error: " + errorMessage);
    });
}