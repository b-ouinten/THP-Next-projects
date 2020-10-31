class Paladin extends Character {
  constructor (name, hp = 16, dmg = 3, saDmg = 4, mana = 160, saMana = 40) {
      super(name, hp, dmg, saDmg, mana, saMana);
  }

  specialAttack(victim) {
    console.log('Healing Lighting !')
    super.specialAttack(victim);
    this.hp += 2;
  }
}