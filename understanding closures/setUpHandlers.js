var buttons = document.getElementsByTagName('button');

function createHandler(name) {
  return function() {
    console.log(name)
  }
}

for(var i = 0; i < buttons.length; i += 1) {
  let button = buttons[i];
  let buttonName = button.innerHTML;
	button.addEventListener('click', createHandler(buttonName))
}
