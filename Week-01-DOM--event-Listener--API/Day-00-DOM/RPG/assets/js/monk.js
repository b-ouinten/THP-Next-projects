class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, saDmg = 0, mana = 200, saMana = 25) {
    super(name, hp, dmg, saDmg, mana, saMana);
  }

  specialAttack() {
    console.log('Heal !');
    this.hp += 8;
    this.spendMana();
  }
}