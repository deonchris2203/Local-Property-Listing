// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPSVGHHk1av5PjAeGsXosmkj4-JJADAvU",
    authDomain: "property-listing-dypcet.firebaseapp.com",
    databaseURL: "https://property-listing-dypcet-default-rtdb.firebaseio.com",
    projectId: "property-listing-dypcet",
    storageBucket: "property-listing-dypcet.appspot.com",
    messagingSenderId: "274004945809",
    appId: "1:274004945809:web:0f2e5496edaccd534a0830",
    measurementId: "G-YKFR1KGRS5"
};

firebase.initializeApp(firebaseConfig);

var dataContainer = document.getElementById("dataContainer");

function refreshPage() {
    location.reload();
}


var db = firebase.firestore();
var collectionRef = db.collection("propertyinfo");




collectionRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var data = doc.data();

    // Create HTML elements to display the fields
    var div = document.createElement("div");
    div.classList.add("data-item");

    var fieldOrder = ["name", "address", "price", "contact"];

    fieldOrder.forEach(function(field) {
        var label = document.createElement("span");
        label.classList.add("field-label");
        label.textContent = field;

        var value = document.createElement("div");
        value.classList.add("field-value");
        value.textContent = data[field];

        div.appendChild(label);
        div.appendChild(value);
    });    
        // Append the elements to the data container
        dataContainer.appendChild(div);
        
    });
        }).catch(function(error) {
        console.log("Error fetching data from Firestore: ", error);
});










// // Fetch data from Firestore
// collectionRef.get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       var data = doc.data();
  
//       // Create HTML elements to display the fields
//       var div = document.createElement("div");
//       div.textContent = "Name: " + data.name + ", Address: " + data.address + ", Price: " + data.price + ", Contact: " + data.contact;
  
//       // Append the elements to the data container
//       dataContainer.appendChild(div);
//     });
//   }).catch(function(error) {
//     console.log("Error fetching data from Firestore: ", error);
//   });
