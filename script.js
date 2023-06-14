var dataBase = [
  {
    userName: "sonu",
    password: "123",
  },
  {
    userName: "milan",
    password: "",
  },
];

var newFeed = [
  {
    userName: "Ram",
    timeline: "so tired in the learning of javascript",
  },
  {
    userName: "shyam",
    timeline: "Java Script is most famous languge in web",
  },
];

var userName = prompt("What is your UserName");
var password = prompt("Enter Your Password");

function signIn(user, pass) {
  if (user === dataBase[0].userName && pass === dataBase[0].password) {
    console.log(newFeed);
  } else {
    alert("Enter Wrire username and password");
  }
}

signIn(userName, password);
