class Assassin extends Character {
  constructor(name = "Carl", hp = 6, dmg = 6, mana = 20) {
    super(name, hp, dmg, mana);
    this.preservation = false;
		this.nextVictim = null;
  }

  newTurn = () => {
		if (this.preservation) {
			this.shield = 100000;
			this.preservation = false;
			this.attack(7, this.nextVictim);
			if (this.nextVictim.isAlive()) {
				this.takeDamage(7, true);
			}
		} else {
			this.shield = 0;
			this.nextVictim = null;
		}
	}

	shadowHit = (victim) => {
		if (this.attack() && this.mana >= 20) {
			this.mana -= 20;
			this.nextVictim = victim;
			this.preservation = true;
		}
	}
}