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
