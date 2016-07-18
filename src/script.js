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
