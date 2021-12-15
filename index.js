const input = document.querySelector('input')
const btn = document.querySelector('.btn')
const form = document.

btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`I have just clicked the ${btn.innerText} button`)
})

