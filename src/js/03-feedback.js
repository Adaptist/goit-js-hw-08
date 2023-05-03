import throttle from 'lodash.throttle';

const refs = {
    formElem: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('input[name="email"]'),
    messageInput: document.querySelector('textarea[name="message"]'),
};

refs.formElem.addEventListener('submit', e => {
    e.preventDefault();
});

let obj = {}
const THROTTLE_INTERVAL = 500;

refs.formElem.addEventListener('input', throttle(e => {
    const value = e.target.value;
    const key = e.target.name;

    obj[key] = value;
    
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}, THROTTLE_INTERVAL));

const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

refs.emailInput.value = formData.email || '';
refs.messageInput.value = formData.message || '';

refs.formElem.addEventListener('submit', e => {
    e.preventDefault();
    
    const formData = {
        email: refs.emailInput.value,
        message: refs.messageInput.value,
    };

    localStorage.removeItem("feedback-form-state");
    refs.emailInput.value = '';
    refs.messageInput.value = '';

    console.log(formData);
    obj = {};
});