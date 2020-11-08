const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error')

form.addEventListener ('submit',(e) => {
    let messages = []
    if (username.value === '' || username.value == null){
        messages.push(' A username input is required')
    }

    if (messages.length > 0 ){
        e.preventDefault();
        error.innerText = messages.join(', ')
    }
   
})

function validate(){

}
