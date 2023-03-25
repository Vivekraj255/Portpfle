// Three line menu icon 
const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

icon.onclick = function(){
    icon.classList.toggle('active');
    menu.classList.toggle('active');
}

document.onclick = function(clickEvent){
    if(clickEvent.target.id !== 'menu' && clickEvent.target.id !== 'icon'){
        icon.classList.remove('active');
        menu.classList.remove('active');
    }
}

// Home section styling font changer

var typingText = document.querySelector('.second');
var myArray = 
["Web Developer.","Python Developer.","Coder."];
var arrayIndex = 1;
function textReplace(){
    setInterval(timer,2500);
    function timer(){
        if(arrayIndex < myArray.length){
            typingText.innerHTML = myArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
        else{
            arrayIndex = 0;
            typingText.innerHTML = myArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
    }
}
textReplace();


// toggle color theme button

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = ()=>{
    themeToggler.classList.toggle('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn=>{
    btn.onclick =()=>{
        let color = btn.style.background;
        document.querySelector('body').style.setProperty('background-color',color);
        themeToggler.classList.remove('active');
    }
})


// Adding scroll header

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

