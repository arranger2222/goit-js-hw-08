import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const email = form.email;
const textArea = form.message;
const formData = {};

form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', throttle(onFormInput, 500));
textArea.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();  
    console.log('Отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  };

  function onFormInput(evt) {    
    formData[evt.target.name] = evt.target.value;
    const dataToStorage = JSON.stringify('formData');
    console.log(dataToStorage);
    localStorage.setItem(STORAGE_KEY, dataToStorage);
  };







//const {
//     elements: { login, password }
//   } = event.currentTarget;



// const form = document.querySelector('.login-form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event){
//     event.preventDefault();
//     const { 
//     elements: { email, password }  
//     } = event.currentTarget;
//    if(email.value === '' || password.value === ''){
//     alert('Please fill in all the required fields. ')
// }
// const userFormData = {email: email.value, password: password.value};
// console.log(userFormData);
// event.currentTarget.reset();
// };

