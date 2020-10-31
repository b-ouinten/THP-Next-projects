class Berzerker extends Character {
  constructor(name = "Draven", hp = 8, dmg = 4, mana = 0) {
		super(name, hp, dmg, mana);
	}

	rage = () => {
		if (this.attack()) {
			this.dmg += 1;
			this.hp -= 1;
		}
	}
}