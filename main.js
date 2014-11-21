var container = document.querySelector(".container");
var input = document.querySelector(".inpt");

function Cat(name, age, color, whiskerLength, bib) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.whiskerLength = whiskerLength;
  this.bib = bib;

  this.sayName = function() {
    container.innerHTML += "Hi, my name is " + this.name + '<br />';
  };

  this.sayColor = function() {
    container.innerHTML += "Did you know that my color is called " + this.color + "?</br>";
  };

  this.sayAge = function() {
    container.innerHTML += "I'm " + this.age + " years old.<br />";
  };
}

var catOne = new Cat("Eddy", 3, "TuxiBoi", 20, true);

function render() {
  var listItem = document.createElement("li");
  listItem.innerHTML = input.value;
  container.appendChild(listItem);
  input.value = "";
};

var btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
  catOne.sayName();
  catOne.sayAge();
  catOne.sayColor();
  render();
});
