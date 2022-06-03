const submitButton = document.querySelector('button[type="submit"]');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#conpassword');
const warning = document.querySelector('.warning');

submitButton.addEventListener('click', submitHandler);

function submitHandler(e) {
    if (passwordConfirmation.value != password.value) {
        e.preventDefault();
        window.history.back();
        password.classList.add('input--warning');
        passwordConfirmation.classList.add('input--warning');
        warning.textContent = '* Passwords do not match';
    } else {
        password.classList.remove('input--warning');
        passwordConfirmation.classList.remove('input--warning');
        warning.textContent = '';
    }
}