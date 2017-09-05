const varToggleList = document.getElementById('toggleList')
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const varAddItemInput = document.querySelector('input.addItemInput')
const varAddItemButton = document.querySelector('button.addItemButton')
const varRemoveItemButton = document.querySelector('button.removeItemButton')
//const listItems = document.getElementsByTagName('li');

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('mouseover', () => {
//     listItems[i].textContent = listItems[i].textContent.toUpperCase();
//   });
//
//   listItems[i].addEventListener('mouseout', () => {
//     listItems[i].textContent = listItems[i].textContent.toLowerCase();
//   });
// }

listDiv.addEventListener('mouseover', (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});
listDiv.addEventListener('mouseout', (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});

// document.addEventListener('click', (event) => {
//   console.log(event.target);
// });

varToggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    varToggleList.textContent = 'Hide list'
    listDiv.style.display = 'block';
  } else {
    varToggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

varAddItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = varAddItemInput.value;
  ul.appendChild(li);
  varAddItemInput.value = '';
});

varRemoveItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
})
