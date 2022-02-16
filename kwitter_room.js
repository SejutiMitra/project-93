const firebaseConfig = {
  apiKey: "AIzaSyA8BYOC9NNZCX_sKhmSk0Z1mPGcCl58Lsc",
  authDomain: "kwitter-428d6.firebaseapp.com",
  databaseURL: "https://kwitter-428d6-default-rtdb.firebaseio.com",
  projectId: "kwitter-428d6",
  storageBucket: "kwitter-428d6.appspot.com",
  messagingSenderId: "1045535626895",
  appId: "1:1045535626895:web:27b399af6ff9f486cb82fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
