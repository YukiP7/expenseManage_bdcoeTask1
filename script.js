const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
    e.preventDefault()

    const amount = parseInt(document.querySelector('#amt').value)
    const descrip = (document.querySelector('#description').value)
    const wrng_ans = document.querySelector('#wrng-ans')

    if(amount === '' || amount === 0 || isNaN(amount)){
        wrng_ans.innerHTML = `Invalid Input ${amount}`     
    }else{
        const item = document.createElement('li') 
        item.innerHTML = `<span>${descrip} ${amount}</span>`
        document.querySelector('#ans').appendChild(item) 
        
        const exp = document.querySelector('#expense')
        exp.innerHTML = `${amount}`
    }
});

const hamburger = document.querySelector('.hamburger')
const profile = document.querySelector('.header')

const cross = document.getElementById('cross')
const transcations= document.querySelector('.Transcations')
const info = document.querySelector('.info')

cross.addEventListener('click' , function(){
    profile.style.visibility = "hidden";
    cross.style.visibility ="hidden" ;
    hamburger.style.visibility="visible" ;
    info.style.visibility = "visible" ;
})


hamburger.addEventListener('click' , function(){
    profile.style.visibility = "visible" ;
    hamburger.style.visibility="hidden" ;
    cross.style.visibility = "visible" ;
    //  transcations.style.visibility = "hidden" ;
     info.style.visibility = "hidden" ;


})
