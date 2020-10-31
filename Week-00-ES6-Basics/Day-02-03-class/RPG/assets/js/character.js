class Character {
  constructor(name, hp, dmg, saDmg = 0, mana = 0, saMana = 0, status = 'playing') {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.saDmg = saDmg;
    this.mana = mana;
    this.saMana = saMana;
    this.status = status;
  }

  getReady() {

  }

  takeDamage(dmgNb) {
    this.hp -= dmgNb;
    if (this.isLost()) {
      this.hp = 0;
      this.loser();
      console.log(`${this.name} lost !`)
    }
  }

  dealDamage(victim, dmgNb = this.dmg) {
    victim.takeDamage(dmgNb);
    console.log(`${this.name} (${this.constructor.name}) is attacking ${victim.name} (${victim.constructor.name}). He deals him ${dmgNb} damages. ${victim.name} got a ${victim.hp} points left`)

    if (victim.isLost())
      this.hp += 20;
  }
  
  spendMana() {
    this.mana -= this.saMana;
  }

  specialAttack(victim) {
    this.dealDamage(victim, this.saDmg);
    this.spendMana();
  }

  isLost() {
    return (this.hp <= 0);
  }

  loser() {
    this.status = 'Loser';
  }
  
  isAlive() {
    return (this.hp > 0)
  }

  winner() {
    this.status = 'Winner';
  }
}