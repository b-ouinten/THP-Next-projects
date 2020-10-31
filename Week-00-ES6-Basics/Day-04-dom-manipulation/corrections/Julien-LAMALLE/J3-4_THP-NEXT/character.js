class Character {
  constructor(name, hp, dmg, mana) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.status = "playing";
    this.shield = 0;
  }

  isAlive = () => {
		return this.hp > 0
  }
  
  takeDamage = (dmg, assassin = false) => {
		if (this.status != "playing") {
			console.log(`Hey why did I get attacked ? I'm not playing !`);
			return 0;
		}
		if (!assassin)
			this.hp -= dmg - this.shield;
		else
			this.hp -= dmg;
		if (this.hp <= 0) {
			this.hp = 0;
			this.status = "loser";
			console.log(`${this.name} just died !`);
		}
		return dmg - this.shield;
	}
  newTurn = () => { };

  attack = (dmg, victim) => {
    if (this.status != "playing") {
			console.log("I can't attack because i'm not playing");
			return false;
		}
		if (victim != null && victim.status != "playing") {
			console.log(`Impossible to attack ${victim.name} because he is not playing`);
			return false;
		}
		if (dmg != 0) {
			let damageInflicted = victim.takeDamage(dmg);
			console.log(`${this.name} is attacking ${victim.name}. ${victim.name} got ${victim.hp} hp left`);
			if (!victim.isAlive())
				this.mana += 20;
		}
	}

	dealDamage = (victim) => {
		this.attack(this.dmg, victim);
	}
}