// Your JS goes here

for (x = 0;x < 63;x++) {

  var block = document.createElement('div');
  block.style.width = '11.1%';
  block.style.paddingBottom = '11.1%';
  block.style.float = 'left';

  if (x % 2 === 0) {
    block.style.backgroundColor = 'red';
    document.body.appendChild(block);
  }
  else {
    block.style.backgroundColor = 'black';
    document.body.appendChild(block);
  }
}

//Random colors

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (x = 0; x < 63; x++) {
  var block = document.createElement('div');
  block.style.width = '11.1%';
  block.style.paddingBottom = '11.1%';
  block.style.float = 'left';
  block.style.backgroundColor = getRandomColor();

  document.body.appendChild(block);

}

//Gradient

for (x = 96; x > 33; x--) {
  var block = document.createElement('div');
  block.style.width = '11.1%';
  block.style.paddingBottom = '11.1%';
  block.style.float = 'left';
  block.style.backgroundColor = '#7452' + x;
  document.body.appendChild(block);
}

//Flashing

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (x = 0;x < 63; x++) {
  var block = document.createElement('div');
  block.style.width = '11.1%';
  block.style.paddingBottom = '11.1%';
  block.style.float = 'left';
  block.style.backgroundColor = getRandomColor();

  document.body.appendChild(block);
}

window.setTimeout(function() { document.location.reload(true); }, 1000);
