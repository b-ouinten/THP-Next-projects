  class Paladin extends Character {
	constructor(name = 'Ulder', hp = 16, dmg = 3,mana = 160, status = 'playing') {
		super(name, hp, dmg, mana, status);
	}

	healingLighting = (victim) => {
		victim.hp = victim.hp - 4;
		this.hp = this.hp + 5;
		this.mana = this.mana -40;
		console.log(`${this.name} utilise Healing Lighting ! Il gagne 5 points de vie mais perd 40 points de mana. Il a maintenant ${this.hp} points de vie et ${this.mana} points de mana. Cette attaque inflige 4 dmg à ${victim.name}. ${victim.name} a maintenant ${victim.hp} points de vie restants.`);
	}
}