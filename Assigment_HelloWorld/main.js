// Alert with "Hello world" and add onclick event to button, after the DOM's content is loaded.
document.addEventListener("DOMContentLoaded", function() {
    alert("Hello world");
    document.getElementById("sayHelloBtn").onclick = sayHello;
})

// Change paragraph to "Hello World"
function sayHello() {
    document.getElementById("text").innerHTML = "Hello world";
}