for (x = 96; x > 33; x--) {
  var block = document.createElement('div');
  block.style.width = '11.1%';
  block.style.paddingBottom = '11.1%';
  block.style.float = 'left';
  block.style.backgroundColor = '#7452' + x;
  document.body.appendChild(block);
}
