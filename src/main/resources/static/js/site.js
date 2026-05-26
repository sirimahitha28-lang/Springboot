console.log("Hello from JS");

var users = [
    {"name" : "John", "gender" : "Male", "img" : "https://www.w3schools.com/HOWTO/img_avatar.png"},
    {"name" : "Jane", "gender" : "Female", "img" : "https://www.w3schools.com/HOWTO/img_avatar2.png"}
];

var currentUserIndex = 0;

function toggleCard(){
    currentUserIndex =(currentUserIndex + 1) % 2;
    var user = users[currentUserIndex];

    // DOM Manipulation
    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}