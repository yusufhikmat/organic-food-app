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

//navbar color change

function changeNavbarBg(){
    const scrollValue = window.scrollY;
    const navbar = document.getElementById('navbar');
    const logo = document.querySelector('.logo')
    const links=document.querySelector('.nav-links')
    if(scrollValue < 600){
        navbar.classList.remove('change-navbarBg')
        logo.style.display = 'block';
    
    }else{
        navbar.classList.add('change-navbarBg')
        logo.style.display = 'none';
        links.style.lineHeight='1.5rem';
    }
}
window.addEventListener('scroll', changeNavbarBg)

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