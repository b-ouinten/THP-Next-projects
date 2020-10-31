class Monk extends Character {
	constructor(name = 'Moana', hp = 8, dmg = 2,mana = 200,status = 'playing') {
		super(name, hp, dmg, mana, status);
	}

	heal = () => {
		this.hp = this.hp + 8;
		this.mana = this.mana - 25;
		console.log(`${this.name} utilise Heal et gagne gagne 8 points de vie mais perd 25 points de mana. ${this.name} a maintenant ${this.hp} points de vie et ${this.mana} points de mana.`);
	}
}