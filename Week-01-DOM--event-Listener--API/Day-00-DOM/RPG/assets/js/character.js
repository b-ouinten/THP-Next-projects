class Character {
  tagInfo = getElementByTagName('article');
  tagName = this.tagInfo.children[0].lastChild;
  tagRace = this.tagInfo.children[1].lastChild;
  tagLifePoints = this.tagInfo.querySelector('.hp');
  tagMana = this.tagInfo.querySelector('p.mana span');
  tagDamage = this.tagInfo.querySelector('b');

  constructor(name, hp, dmg, saDmg = 0, mana = 0, saMana = 0, status = 'playing', type = 'bot') {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.saDmg = saDmg;
    this.mana = mana;
    this.saMana = saMana;
    this.status = status;
    this.type = type;
  }

  displayInformations () {
    this.tagName.innerHTML = `${this.name} `;
    this.tagRace.innerHTML = `${this.constructor.name} `;
    this.tagLifePoints.innerHTML = `${this.hp} `;
    this.tagMana.innerHTML = `${this.mana} `;
    this.tagDamage.innerHTML = `${this.dmg} `;
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

  isBot (){
    return (this.type == 'bot');
  }

  isHumain() {
    return (this.type == 'humain');
  }
}