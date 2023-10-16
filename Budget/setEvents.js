const hamburger = document.querySelector('.hamburger')
const profile = document.querySelector('.header')

const cross = document.getElementById('cross')
const budget = document.querySelector('.budget')

cross.addEventListener('click' , function(){
    profile.style.visibility = "hidden";
    cross.style.visibility ="hidden" ;
    hamburger.style.visibility="visible" ;
    budget.style.visibility = "visible" ;
});


hamburger.addEventListener('click' , function(){
    profile.style.visibility = "visible" ;
    hamburger.style.visibility="hidden" ;
    cross.style.visibility = "visible" ;
    budget.style.visibility = "hidden" ;

});


//to print budget value 
const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const amt = parseInt(document.getElementById('inputAmt').value)
    const totInc = document.getElementById('amt') 
    
    localStorage.setItem(totInc , amt) ;
    totInc.innerHTML = `<span>${localStorage.getItem(totInc , amt)}</span>`;
    
});
