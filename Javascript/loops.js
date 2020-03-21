var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (var i=0; i < todos.length; i++) {
    console.log(todos[i]);
}


for (var i=0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

console.log("Updated:");

for (var i=0; i < todos.length; i++) {
    console.log(todos[i]);
}
