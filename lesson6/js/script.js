'use strict';

let li = document.createElement('li'),
    ul = document.querySelector('.menu'),
    body = document.getElementsByName('body'),
    div_title = document.getElementById('title'),
    column = document.querySelectorAll('.column')[1],
    pr = document.getElementById('prompt'),
    adv = column.querySelector('.adv');

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

div_title.textContent = "Мы продаем только подлинную технику Apple" ;

column.removeChild(adv);

li.classList.add('menu-item');
li.textContent = "Пятый пункт";
ul.appendChild(li);

pr.textContent = prompt("Ваше отношение к технике apple?","");
