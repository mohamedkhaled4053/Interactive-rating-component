// variables
let list = document.querySelectorAll('ul li')
let submit = document.querySelector('.submit')
let rateSection = document.querySelector('.rating')
let thankYou = document.querySelector('.thank')
let pragraphOfRate = document.querySelector('.rate')

//eventLesteners
for (const li of list) {
    li.addEventListener('click',()=>{
        for (const i of list) {
            i.classList.remove('active')
        }
        li.classList.add('active')
    })
}


submit.onclick =(e)=>{
    e.target.nextSibling.remove()
    let rate = document.querySelector('.active')
    if (!rate){
        let alert = document.createElement('p')
        alert.textContent = 'please select a rate first'
        e.target.after(alert)
        return
    }

    rateSection.style.display ='none'
    thankYou.style.display ='block'

    console.log(rate);
    pragraphOfRate.textContent = `You selected ${rate.dataset.value} out of 5`
}