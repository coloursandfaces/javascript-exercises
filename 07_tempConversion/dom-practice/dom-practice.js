const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const red = document.createElement('p');
red.classList.add('content');
red.textContent = "Hey I'm red!";
red.style.color = "red";

const h3 = document.createElement('h3');
h3.classList.add('content');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const box = document.createElement('div');
box.setAttribute('style', 'border: solid; background: pink;');


const h1 = document.createElement('h1');
h1.classList.add('content');
h1.textContent = "I'm in a div!";

const second = document.createElement('p');
second.classList.add('content');
second.textContent = "Me too!";

box.appendChild(h1);
box.appendChild(second);

container.appendChild(content);
container.appendChild(red);
container.appendChild(h3);
container.append(box);


function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  const btn = document.querySelector('#btn');
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
