//navigation bar
const navToggle =document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links');
//add event listener
navToggle.addEventListener('click',showLinks);
//function
function showLinks(){
    if(navLinks.classList.contains('show-links')){
        navLinks.classList.remove('show-links')
    }else{
        navLinks.classList.add('show-links')
    }
}
//end of navigation

//read more and readless of btnseefoodmenu
const btnSeeFoodMenu = document.querySelector('.read-more');
const aboutText= document.querySelector('.about-text');

//add eventlistener
btnSeeFoodMenu.addEventListener('click', showText)

//function showText
function showText(){
    aboutText.classList.toggle('show-more')
    if(btnSeeFoodMenu.textContent ==='Read More'){
        btnSeeFoodMenu.textContent='ReadLess';
    }else{
        btnSeeFoodMenu.textContent= 'Find out more';
    }
}

//instagram slider
var instagramSlider= document.getElementById("instagramSlider");
var instagramItem = instagramSlider.getElementsByClassName("instagram-card");
        function after(){
            instagramSlider.append(instagramItem[0]);
        }
        function before(){
            instagramSlider.prepend(instagramItem[instagramItem.length - 1]);
        }