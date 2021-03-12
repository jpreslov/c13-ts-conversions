const diceContainer = <HTMLDivElement>document.getElementById('dice-container'),
  generateDie = <HTMLButtonElement>document.getElementById('generate-die'),
  sumDice = <HTMLButtonElement>document.getElementById('sum-dice'),
  rollDice = <HTMLButtonElement>document.getElementById('roll-dice');

//so sick I'm so smart shout out mom shout out dad shout out 'hoo'
let diceArr: Die[] = [];

generateDie.addEventListener('click', () => {
  let value = Math.floor(Math.random() * 6 + 1);
  new Die(value);
});

sumDice.addEventListener('click', () => {
  let sum = 0;
  diceArr.forEach((die: Die) => (sum += die.value));
  alert(sum);
});

rollDice.addEventListener('click', () => diceArr.forEach((die: Die) => die.roll()));

class Die {
  value: number;
  div: HTMLDivElement;

  constructor(value: number) {
    this.value = value;
    this.div = document.createElement('div');
    this.div.className = 'dice';
    this.div.addEventListener('click', () => this.roll());
    this.div.addEventListener('dblclick', () => {
      let index = diceArr.indexOf(this);
      diceArr.splice(index, 1);
      diceContainer.removeChild(this.div);
    });
    this.roll();
    diceContainer.appendChild(this.div);
    diceArr.push(this);
  }

  roll = () => {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    this.value = randomNum;
    this.div.innerHTML = String(this.value);
  };
}
