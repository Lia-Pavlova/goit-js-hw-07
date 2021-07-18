// ------------- Задание 5 -------------

//Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), 
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

const onInput = () => {
  refs.spanEl.textContent = refs.inputEl.value.trim() ? refs.inputEl.value : 'незнакомец';
};
refs.inputEl.addEventListener('input', onInput);


// ------------------------------------------------------------------

// const refs = {
//   inputEl: document.querySelector('#name-input'), //input
//   spanEl: document.querySelector('#name-output'), //span
// };
// const onInput = inputName => {  // onInput - функция обработчик события
//   let textInput = 'незнакомец';
//   textInput = refs.inputEl.value || 'незнакомец';
//   refs.spanEl.textContent = textInput;
//   inputEl.value === ''
//     ? (spanEl.textContent = 'незнакомец')
//     : (spanEl.textContent = inputName.target.value);
//   return inputName;
// };
// refs.inputEl.addEventListener('input', onInput);




