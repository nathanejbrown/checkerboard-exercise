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
