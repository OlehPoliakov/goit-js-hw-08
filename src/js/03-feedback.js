import throttle from 'lodash.throttle';

const ref = {
    form : document.querySelector('.feedback-form'),
    email : document.querySelector('.feedback-form input'),
    textarea : document.querySelector('.feedback-form textarea'),
}
const LOCALSTORAGE_KEY = 'feedback-form-state';

ref.form.addEventListener('submit', onSubmitForm);
ref.form.addEventListener('input', throttle(onFormData, 500));

const formData = {};

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (data) {
        ref.email.value = data.email;
        ref.textarea.value = data.message;
    }