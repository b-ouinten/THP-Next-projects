class Fighter extends Character{
  constructor(name="Grace", hp=12, dmg=4, mana=40, status='playing'){
    super(name, hp, dmg, mana, status);
  }
darkVision = (victim) => {

  victim.hp = victim.hp -4;
  this.mana = this.mana -20;
  console.log(`${this.name} sacrifie ${this.mana} point de mana et  utilise sa DarkVision ! ça fait mal ! ${this.dmg} dans la face de ${victim.name} qui à désormais ${victim.hp} points de vie ! `)
}
}




//(name,hp,dmg,mana,status)