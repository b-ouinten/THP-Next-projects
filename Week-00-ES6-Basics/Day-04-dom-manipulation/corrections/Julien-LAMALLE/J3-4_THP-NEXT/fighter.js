class Fighter extends Character {
  constructor(name = "Grace", hp = 12, dmg = 4, mana = 40) {
    super(name, hp, dmg, mana);
    this.preservation = false;
  }

  darkVision = (victim) => {
		console.log(victim);
		if (this.attack(5, victim) && this.mana >= 20) {
			this.mana -= 20;
			this.preservation = true;
		}
  }
  
  newTurn = () => {
		if (this.preservation) {
			this.shield = 2;
			this.preservation = false;
		} else {
			this.shield = 0;
		}
	}
}