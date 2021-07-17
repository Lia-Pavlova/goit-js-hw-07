// ------------- Задание 2 -------------

//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('ul#ingredients');
const listItems = ingredients.map(element => {
  const newItem = document.createElement('li');
  newItem.textContent = element;
  return newItem;
});
list.append(...listItems);
