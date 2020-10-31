class Character {
  constructor(name, hp, dmg, mana, status){
  this.name = name;
  this.hp = hp;
  this.dmg = dmg;
  this.mana = mana;
  this.status=status;

}

dealDamage = (victim) => {
  victim.hp = victim.hp - this.dmg;
}

isDead = () => {
  this.status = 'loser'
  console.log(`${this.name} à péri au combat` )
}

killed = () => {
  this.mana = this.mana + 20;
  console.log(`Le gladiateur ${this.name} à explosé sa victime ! Il gagne 20 points de mana. Il a désormais ${this.mana} points de mana, puisse-t-il en faire bon usage !`)
}

takeDamage = () => {

}
}