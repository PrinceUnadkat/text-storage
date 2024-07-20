// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, set, get, ref, push } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDPoU9eqkjDfElycZ3Fp0I7r8yKIByIFXc",
    authDomain: "text-webpage.firebaseapp.com",
    projectId: "text-webpage",
    storageBucket: "text-webpage.appspot.com",
    messagingSenderId: "847143259731",
    appId: "1:847143259731:web:0c8b1e33a74a0c903bc0a6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let vals = document.getElementById("input");

function writeUserData(data) {
    set(ref(db), {
        data: data
    });
}

function readUserData() {
    const userRef = ref(db);

    get(userRef).then((snapshot) => {
        let userNames = ""; // Initialize an empty string

        snapshot.forEach((childsnapshot) => {
            const userData = childsnapshot.val();
            const userName = userData; // Extract the data property
            userNames += userName + "\n"; // Append each name with a newline
        });

        // Display the formatted names
        document.getElementById("readTXT").innerHTML = userNames;
        console.log(userNames);
    });
}


// Event listener for writing data
const wBTN = document.getElementById("writeBTN");
wBTN.addEventListener("click", function() {
    writeUserData(vals.value);
    console.log(vals.value);
    alert("Your text is store in the database after reloading the side or using it from another device the last text we can access by clicking on read button");
});

// Event listener for reading data
const rBTN = document.getElementById("readBTN");
rBTN.addEventListener("click", function() {
    readUserData();
});



function textAreaAdjust(element) {
    element.style.height = "auto"; // Reset height to auto
    element.style.height = (element.scrollHeight + 2) + "px"; // Set new height
}

const inputTextarea = document.getElementById("input");
inputTextarea.addEventListener("input", function() {
    textAreaAdjust(this);
});
