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


submit.onclick =()=>{
    rateSection.style.display ='none'
    thankYou.style.display ='block'

    let rate = document.querySelector('.active').value
    pragraphOfRate.textContent = `You selected ${rate} out of 5`

}