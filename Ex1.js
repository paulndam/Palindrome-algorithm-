// determine if a given string is a PALINDROME

function Stack () {
  this.dataStore = [];
  this.pop = pop;
  this.push = push;
  this.peek = peek;
  this.top = 0;
  this.length = length;
  this.clear = clear;
}

function push (element) {
  this.dataStore[this.top++] = element;
}
function pop () {
  return this.dataStore[this.top--];
}
function peek () {
  return this.dataStore[this.top - 1];
}
function length () {
  return this.top;
}
function clear () {
  this.top = 0;
  this.dataStore.length = 0;
}

function Palindrome (word) {
  var stack = new Stack ();

  // loop thru my string word and then push each character onto the stack

  for (var i = 0; i < word.length; i++) {
    stack.push (word[i]);
  }

  // once the string is on the stack
  // we create a new string, and then pop each letter to the stack
  // this process will will create the origina; string in reverse order
  var newWord = '';
  while (stack.length () > 0) {
    newWord += stack.pop ();
  }

  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}

var word = 'hello';
if (Palindrome (word)) {
  console.log (`${word} is a palindrome`);
} else {
  console.log (`${word} is not a palindrome`);
}

word = 'dad';
if (Palindrome (word)) {
  console.log (`${word} is a palindrome`);
} else {
  console.log (`${word} is not a palindrome`);
}
