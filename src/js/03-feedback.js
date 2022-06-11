import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
let email = form.email;
let textArea = form.message;
const formData = {};


form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', throttle(onFormInput, 500));
textArea.addEventListener('input', throttle(onFormInput, 500));

getDataFromStorage();


function onFormSubmit(evt) {
    evt.preventDefault();  
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
  };


function onFormInput(evt) {    
    formData[evt.target.name] = evt.target.value;    
    const dataToStorage = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, dataToStorage);    
  };


function getDataFromStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
  
    if (savedData) {
      email.value = parsedData.email;
      textArea.value = parsedData.message;
    }  
};