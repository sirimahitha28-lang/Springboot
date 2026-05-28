var currentUserIndex=1;
var UserArray=[
    {"name":"John Doe","gender":"Male","image":"img/john_doe.png"},
    {"name":"Jane Doe","gender":"Female","image":"img/jane_doe.png"}
];
function toggleUser(){
      currentUserIndex=1-currentUserIndex;
      var nextUser=UserArray[currentUserIndex];
      console.log(nextUser);
      display(nextUser);
}
function display(user){
    //console.
    document.getElementById("userImage").src=user.image;
    document.getElementById("username").textContent=user.name;
    document.getElementById("userGender").textContent=user.gender;


}