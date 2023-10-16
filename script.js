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
     info.style.visibility = "hidden" ;


});


const form1 = document.querySelector('#one')
const form2 = document.querySelector('#two')
let arr = []

form1.addEventListener('submit' , function(e){
    e.preventDefault() ;

    const budget = document.getElementById('budget')
    const amt = parseInt(document.getElementById('inputAmt').value) ;
    localStorage.setItem(budget , amt);
    budget.innerHTML = `<span>${localStorage.getItem(budget , amt)}</span>` ;
    arr.push(amt) ;
});

const balance = document.getElementById('balance')

    

let a=[]
form2.addEventListener('submit' , function(e){
    e.preventDefault();

    let amount = parseInt(document.querySelector('#amt').value);
    const descrip = (document.querySelector('#description').value)
    const wrng_ans = document.querySelector('#wrng-ans')

    a.push(amount);

    if(amount === '' || amount === 0 || isNaN(amount)){
        wrng_ans.innerHTML = `Invalid Input ${amount}`     
    }else{
        const item = document.createElement('li') 
        item.innerHTML = `${descrip}      <span>${amount}</span>`
        document.querySelector('#ans').appendChild(item) 
        
        const exp = document.querySelector('#expense')
        localStorage.setItem(exp , amount);
        // exp.innerHTML = `<span>${localStorage.getItem(exp , amount)}</span>` ;
        let sum = a.reduce((h1,h2)=>{
            return h1+h2
        })
        arr.push(sum) ;
        // console.log(sum);
        exp.innerHTML = `<span>${sum}</span>`

        let bal = arr.reduce((h1 , h2) =>{
            return h1 - h2
        })
        balance.innerHTML = `<span>${bal}</span>`
    }
});





 
    
