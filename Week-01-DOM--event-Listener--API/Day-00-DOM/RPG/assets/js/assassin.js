class Assassin extends Character {
  constructor (name, hp = 6, dmg = 6, saDmg = 7, shDmg = 7, mana = 20, saMana = 20, armor_next_turn = false, hasArmor = false) {
    super(name, hp, dmg, saDmg, mana, saMana);
    this.armor_next_turn = armor_next_turn;
    this.hasArmor = hasArmor;
    this.shDmg = shDmg;
  }

  getReady() {
    this.carryArmor();
  }

  takeDamage(dmgNb) {
    if (this.hasArmor)
      super.takeDamage(0);
    else
      super.takeDamage(dmgNb);
  }

  specialAttack(victim) {
    console.log('Shadow Hit !');
    super.specialAttack(victim);
    this.armor_next_turn = true;
    if (!victim.isLost())
      this.takeDamage(this.shDmg);
  }

  carryArmor() {
    if (this.armor_next_turn) {
      this.hasArmor = true;
      this.armor_next_turn = false;
    } else
      this.hasArmor = false;
  }
}