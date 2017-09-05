// function decoloration:
function say(something) {
  console.log(something);
}

function exec(func, arg) {
  func(arg);
}

// exec((something) => {
//   console.log(something);
// }, 'Hi, there');

// call back function
window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings, everyone!');
