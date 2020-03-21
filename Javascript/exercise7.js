// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var database = [
    {username: "sean",
    password: "secret"},
    {username: "cait",
    password: "love"},
    {username: "charlie",
    password: "puppy"}
];

// 2. Create an array which contains the object you have made above and name the array "database".



// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsFeed = [
    {username: "Alexander", timeline: "Y'arrr matey!"},
    {username: "Reginald", timeline: "Heck yeah, I like pirates!"},
    {username: "Salamander", timeline: "I prefer amphibians"}
];

// var usernamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password (I wont' telllll...)");

function checkUser(user, pass) {
    for (i=0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password) {
           return true;
        }
    } return false;
}



function signIn(user, pass) {
    if (checkUser(user, pass)) {
            newsFeed.forEach(function(i) {document.write(i.username + " says: " + i.timeline);})
        }
     else {
        alert("Sorry, your username or password is incorrect");
    }
}


// signIn(usernamePrompt, passwordPrompt);

newsFeed.forEach(function(i) {document.write(i.username + " says: " + i.timeline);})
