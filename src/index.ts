class Soldier {
    constructor(public health:number, public strength:number){}
    attack(){
        return this.strength
    }
    receiveDamage(damage:number){
        this.health -= damage
    }
}

class Viking extends Soldier{
    constructor(public name:string, public health:number, public strength:number){
        super(health, strength)
    }
    receiveDamage(damage:number){
        this.health -= damage
        if(this.health > 0){
            return `${this.name}`+` has received `+`${damage}`+` points of damage`
        }
        if(this.health <= 0){
            return `${this.name}`+` has died in act of combat`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

class Saxon extends Soldier{
    constructor(public health:number, public strength:number){
        super(health, strength)
    }
    receiveDamage(damage:number){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received `+`${damage}`+` points of damage`
        }
        if(this.health <= 0){
            return `A Saxon has died in combat`
        }
    }
}

class War {
    constructor(public vikingArmy:object[]=[],public saxonArmy:object[]=[]){}
    addViking(Viking:object){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon:object){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let randomSaxon:any = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking:any = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let attakResult = randomSaxon.receiveDamage(randomViking.attack())
        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxon)
        }
        return attakResult
    }
    saxonAttack(){
        let randomSaxon:any = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let randomViking:any = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let attakResult = randomViking.receiveDamage(randomSaxon.attack())
        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomViking)
        }
        return attakResult
    }
    showStatus(){
        if(this.saxonArmy.length <= 0){
            return 'Vikings have won the war of the century!'
        }
        if(this.vikingArmy.length <= 0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        if(this.vikingArmy.length === 1 && this.saxonArmy.length === 1 ){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
