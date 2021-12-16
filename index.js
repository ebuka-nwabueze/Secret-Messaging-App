
const btn = document.querySelector('.btn')
const form = document.querySelector('form')

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const input = document.querySelector('#message-input')
    const encrypted = btoa(input.value)

    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select()
    

});