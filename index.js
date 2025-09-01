const main = document.getElementById('main');
main.remove();

var newHeader = document.createElement('h1');

newHeader.id = 'victory';
newHeader.textContent = 'Josephine is the champion';

document.body.appendChild(newHeader);