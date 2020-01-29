// Your code goes here
function replace () {
    let p = document.getElementById('text')
    p.textContent = 'This is really cool!';
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    replace();
  });