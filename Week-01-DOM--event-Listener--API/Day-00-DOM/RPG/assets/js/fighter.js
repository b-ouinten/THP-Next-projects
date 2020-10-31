class Fighter extends Character {
  constructor (name, hp = 12, dmg = 4, saDmg = 5, mana = 40, saMana = 20, armor_next_turn = false, armor = 0) {
    super(name, hp, dmg, saDmg, mana, saMana);
    this.armor_next_turn = armor_next_turn;
    this.armor = armor;
  }

  getReady() {
    this.carryArmor();
  }

  takeDamage(dmgNb) {
    dmgNb -= this.armor;
    super.takeDamage(dmgNb);
  }
  
  specialAttack(victim) {
    console.log('Dark Vision !');
    super.specialAttack(victim);
    this.armor_next_turn = true;
  }

  carryArmor() {
    if (this.armor_next_turn) {
      this.armor = 2;
      this.armor_next_turn = false; 
    } else
      this.armor = 0;
  }
}