import throttle from 'lodash.throttle';

const refs = {
    formElem: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('input[name="email"]'),
    messageInput: document.querySelector('textarea[name="message"]'),
};

refs.formElem.addEventListener('submit', e => {
    e.preventDefault();
});

const obj = {}
const THROTTLE_INTERVAL = 500;

refs.formElem.addEventListener('input', throttle(e => {
    const value = e.target.value;
    const key = e.target.name;

    obj [key] = value;
    console.log(obj);
    
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}, THROTTLE_INTERVAL));

const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

refs.emailInput.value = formData.email || '';
refs.messageInput.value = formData.message || '';

console.log(formData);

