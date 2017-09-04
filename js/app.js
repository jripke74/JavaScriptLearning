const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple';
}

const errorNotPurple1 = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < myList.length; i++) {
  errorNotPurple1[i].style.color = 'red';
}
