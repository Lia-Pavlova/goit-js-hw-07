// ------------- Задание 3 -------------

//Напиши скрипт для создания галлереи изображений по массиву данных.
//Используй массив объектов images для создания тегов img вложенных в li. 
//Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryArr = document.getElementById('gallery');
galleryArr.classList.add('gallery');

const galleryItems = images.reduce((acc, { alt, url }) => {
  return `${acc} <li class="gallery__item"><img class="gallery__img" src="${url}" alt="${alt}"></li>`;
}, '');

galleryArr.insertAdjacentHTML('afterbegin', galleryItems);


// -----------------------------------------------------------------------

// const galleryArr = document.querySelector('#gallery');
// galleryArr.classList.add('gallery');

// const galleryItems = images.reduce(
//   (HTMLString, { url, alt }) =>
//     (HTMLString += `<li class="gallery__item"><img class="gallery__img" src="${url}" alt="${alt}"></li>`),
//   '',);

// gallery.insertAdjacentHTML('afterbegin', galleryItems);

// ------------------------------------------------------------------------


// const galleryArr = document.getElementById('gallery');
// galleryArr.classList.add('gallery');

// const galleryItems = images.map(image => {
//   const { url, alt } = image;

//   return `<li class ="gallery__item"><img class ="gallery__img" src="${url}" alt="${alt}"/></li>`;
// });

// galleryArr.insertAdjacentHTML(`beforeend`, galleryItems.join(''));

//-------------------------------------------------------------------------------

// const galleryArr = document.querySelector('#gallery');
// galleryArr.classList.add('gallery');

// const galleryItems = images.map(({ url, alt }) => {
//   return `<li class="gallery__item"><img class="gallery__img" src="${url}" alt="${alt}"/></li>`;
// });

// galleryArr.insertAdjacentHTML('beforeend', galleryItems.join(''));
