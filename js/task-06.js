// ------------- Задание 6 -------------

//Напиши скрипт, который бы при потере фокуса на инпуте,
//проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  inputRef.classList.add('invalid');
  if (
    event.target.value.length === Number(inputRef.getAttribute('data-length'))
  ) {
    inputRef.classList.replace('invalid', 'valid');
  } else inputRef.classList.remove('valid');
}

// ------------------------------------------------------------------------

// const inputRef = document.getElementById('validation-input');

// inputRef.addEventListener('blur', handleInputBlur);

// function handleInputBlur(e) {
//   if (e.currentTarget.value.length === +inputRef.getAttribute('data-length')) {
//     inputRef.classList.add('valid');
//     inputRef.classList.remove('invalid');
//   } else {
//     inputRef.classList.add('invalid');
//     inputRef.classList.remove('valid');
//   }
// }

// ------------------------------------------------------------------------

// const inputRef = document.querySelector('#validation-input');
// const valueLength = Number(inputRef.dataset.length);
// const handleInputBlur = function () {
//   const classToAdd = this.value.length === valueLength ? 'valid' : 'invalid';
//   const classToRemove = this.value.length === valueLength ? 'invalid' : 'valid';
//   this.classList.remove(classToRemove);
//   this.classList.add(classToAdd);
// };
// const removeValidationClass = element => {
//   element.classList.remove('valid', 'invalid');
// };
// inputRef.addEventListener('blur', handleInputBlur);
// inputRef.addEventListener('focus', function () {
//   removeValidationClass(this);
// });











