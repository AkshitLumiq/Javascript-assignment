"use strict";
var numb1;
var currnumb = 0, operator, opcheck = false;

var ac, plusminus, percent, divide, one, two, three, four, five, six, seven, eight, nine, mult, minus, add, equal, double;

var text = document.getElementById('text');

ac = document.getElementById('ac');
ac.addEventListener('click',
  function () {
    numb1 = undefined;
    currnumb = 0;
    opcheck = false;
    text.innerText = "";
  });

plusminus = document.getElementById('plusminus');
plusminus.addEventListener('click',
  function () {
    if (opcheck == true)
      return;
    currnumb *= (-1);
    text.innerText = currnumb;
  });

percent = document.getElementById('percent');
percent.addEventListener('click',
  function () {
    if (opcheck == true)
      return;
    currnumb /= 100;
    text.innerText = currnumb;
  });

divide = document.getElementById('divide');
divide.addEventListener('click',
  function () {
    if (currnumb != undefined) {
      numb1 = currnumb;
      currnumb = 0;
      operator = '/';
      opcheck = true;
    }
    text.innerText = "";
  });

mult = document.getElementById('mult');
mult.addEventListener('click',
  function () {
    if (currnumb != undefined) {
      numb1 = currnumb;
      currnumb = 0;
      operator = '*';
      opcheck = true;
    }
    text.innerText = "";
  });

minus = document.getElementById('minus');
minus.addEventListener('click', function () {
  if (currnumb != undefined) {
    numb1 = currnumb;
    currnumb = 0;
    operator = '-';
    opcheck = true;
  }
  text.innerText = "";
});

add = document.getElementById('add');

add.addEventListener('click',
  function () {
    if (currnumb != undefined) {
      numb1 = currnumb;
      currnumb = 0;
      operator = '+';
      opcheck = true;
    }
    text.innerText = "";
  });

one = document.getElementById('one');
one.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 1;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

two = document.getElementById('two');
two.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 2;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

three = document.getElementById('three');
three.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 3;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

four = document.getElementById('four');
four.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 4;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

five = document.getElementById('five');
five.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 5;
    //console.log(currnumb);
    text.innerText = currnumb;
  });

six = document.getElementById('six');
six.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 6;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

seven = document.getElementById('seven');
seven.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 7;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

eight = document.getElementById('eight');
eight.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 8;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

nine = document.getElementById('nine');
nine.addEventListener('click',
  function () {
    currnumb *= 10;
    currnumb += 9;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

double = document.getElementById('double');
double.addEventListener('click',
  function () {
    currnumb *= 10;
    text.innerText = currnumb;
    //console.log(currnumb);
  });

equal = document.getElementById('equal');
equal.addEventListener('click',
  function () {
    //console.log(numb1);
    //console.log(currnumb);
    if (numb1 == undefined || currnumb == undefined)
      text.innerText = "";
    else {
      currnumb = eval(numb1 + " " + operator + " " + currnumb);
      text.innerText = currnumb;
      numb1 = undefined;
      opcheck = false;
      operator = undefined;
    }
  });