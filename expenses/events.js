const hamburger = document.querySelector('.hamburger')
const profile = document.querySelector('.header')

const cross = document.getElementById('cross')
const expense = document.querySelector('.expense')

cross.addEventListener('click' , function(){
    profile.style.visibility = "hidden";
    cross.style.visibility ="hidden" ;
    hamburger.style.visibility="visible" ;
    expense.style.visibility = "visible" ;
});


hamburger.addEventListener('click' , function(){
    profile.style.visibility = "visible" ;
    hamburger.style.visibility="hidden" ;
    cross.style.visibility = "visible" ;
    expense.style.visibility = "hidden" ;

});