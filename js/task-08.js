// ------------- Задание 8 -------------

//Напиши скрипт создания и очистки коллекции элементов. 
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
//после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:
//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.



const inputNumber = document.querySelector('input[type="number"]'); // querySelector('div > input');
const btnCreate = document.querySelector('button[data-action="render"]');
const btnClear = document.querySelector('button[data-action="destroy"]');
const boxCollection = document.querySelector('#boxes');

let boxSize = 30;

btnCreate.addEventListener('click', () => createBoxes(inputNumber.value));  
btnClear.addEventListener('click', destroyBoxes);
    
function createBoxes(amount) {                                  // добавить по клику дивы
    const boxesArr = [];
    for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');              
    boxEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        boxEl.style.width = boxSize + 'px';
        boxEl.style.height = boxSize + 'px';
        boxSize += 10;
    boxesArr.push(boxEl);
    }
    boxCollection.append(...boxesArr);
}

function getRandom(min, max) {                                // генерация рандомного числа
    return Math.round(Math.random() * (max - min) + min);   
}

function destroyBoxes() {                                    // очистить по клику
    boxCollection.innerHTML = '';
    inputNumber.value = '';
    boxSize = 30;
}