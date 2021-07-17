// ------------- Задание 4 -------------

//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const refs = {
  counterValue: document.getElementById('value'),
  btnIncrement: document.querySelector('[data-action=increment]'),
  btnDecrement: document.querySelector('[data-action=decrement]'),
};

const onIncrementBtnClick = () => {
  refs.counterValue.textContent = +refs.counterValue.textContent + 1;
};

const onDecrementBtnClick = () => {
  refs.counterValue.textContent = +refs.counterValue.textContent - 1;
};

refs.btnIncrement.addEventListener('click', onIncrementBtnClick);
refs.btnDecrement.addEventListener('click', onDecrementBtnClick);