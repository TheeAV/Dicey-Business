let array = [];
let container2 = document.getElementById("container2");
let dieButton = document.getElementById("newdie");
let sumDie = document.getElementById("sumdie");
let reRoll = document.getElementById("Reroll");
dieButton.addEventListener("click", insertDie);

class Die {
  constructor() {
    this.div = document.createElement("div");
    this.div.classList.add("die");
    this.DR();
    container2.appendChild(this.div);
    this.div.addEventListener("click", () => {
      this.DR();
    });
    this.div.addEventListener("dblclick", () => {
      this.div.remove();
      let index = array.indexOf(this);
      array.splice(index, 1);
    });
  }
  DR() {
    let dieFace = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
    this.value = Math.floor(Math.random() * 6);
    this.div.innerHTML = dieFace[this.value];
  }
}

reRoll.addEventListener("click", function () {
  for (let i = 0; i < array.length; i++) {
    array[i].DR();
  }
});

sumDie.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].value + 1;
  }
  alert(`The sum is ${sum}`);
});

function insertDie() {
  let dice = new Die();
  array.push(dice);
}
