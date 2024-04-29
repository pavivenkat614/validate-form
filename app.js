const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit',(e)=>{ //e-event
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    
    if(usernameVal==''){
        setError(username,'Username is required')
    }
    else
    {
        setSuccess(username)
    }

    if(emailVal==''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal))
    {
        setError(email,'Please enter a valid email id')
    }
    else{
        setSuccess(username)
    }

    if(passwordVal=='')
    {
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 character')
    }
    else{
        setSuccess(password)
    }
}

//element - password, msg - pwd is required
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/
    );
};