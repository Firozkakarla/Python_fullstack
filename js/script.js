alert("Welcome to NRIIT Learning Management System")
let heading=document.getElementById("welcome");
heading.innerHTML="Welcome Future Software Engineers"
console.log("Heading elements:", heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is fun"
console.log("Message element:",msg)
function showmessage() {
    alert("Welcome to NRIIT Learning Management System")}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "Welcome Python Fullstack Developers"}
let heading=document.querySelector("#welcome");
console.log("Heading element: ", heading)
let button = document.getElementById("btnGreeting");
button.addEventListener("click",function() {
    alert("Welcome to Javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit,function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (!name || !email || !password){
        alert("please fill in all the fields.");
        return;
    }
    alert("Registration Successful!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
});
