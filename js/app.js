const varToggleList = document.getElementById('toggleList')
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const varAddItemInput = document.querySelector('input.addItemInput')
const varAddItemButton = document.querySelector('button.addItemButton')
const list = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;
//const varRemoveItemButton = document.querySelector('button.removeItemButton')
//const listItems = document.getElementsByTagName('li');

firstListItem.style.background = 'lightskyblue';
lastListItem.style.background = 'lightsteelblue';

function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('mouseover', () => {
//     listItems[i].textContent = listItems[i].textContent.toUpperCase();
//   });
//
//   listItems[i].addEventListener('mouseout', () => {
//     listItems[i].textContent = listItems[i].textContent.toLowerCase();
//   });
// }

for (let i = 0; i < list.length; i++) {
  attachListItemButtons(list[i]);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName === "BUTTON") {
    //event.target.textContent = event.target.textContent.toUpperCase();
    if (event.target.className === 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className === 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className === 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});
// listDiv.addEventListener('mouseout', (event) => {
//   if (event.target.tagName == "LI") {
//     event.target.textContent = event.target.textContent.toLowerCase();
//   }
// });

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
  attachListItemButtons(li);
  ul.appendChild(li);
  varAddItemInput.value = '';
});

// varRemoveItemButton.addEventListener('click', () => {
//   let ul = document.getElementsByTagName('ul')[0];
//   let li = document.querySelector('li:last-child');
//   ul.removeChild(li);
// });
