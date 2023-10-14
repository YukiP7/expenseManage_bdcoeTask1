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
        amount += item.amount

        const exp = document.querySelector('#expense')
        exp.innerHTML = `${amount}`
    }

    
  
});

