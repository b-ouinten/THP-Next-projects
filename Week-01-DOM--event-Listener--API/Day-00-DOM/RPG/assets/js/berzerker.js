class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4) {
    super(name, hp, dmg);
  }

  specialAttack(victim) {
    console.log('Rage !')
    this.dmg++;
    this.hp--;
  }
}