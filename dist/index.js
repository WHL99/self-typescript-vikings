"use strict";
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name}` + ` has received ` + `${damage}` + ` points of damage`;
        }
        if (this.health <= 0) {
            return `${this.name}` + ` has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ` + `${damage}` + ` points of damage`;
        }
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        }
    }
}
class War {
    constructor(vikingArmy = [], saxonArmy = []) {
        this.vikingArmy = vikingArmy;
        this.saxonArmy = saxonArmy;
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let attakResult = randomSaxon.receiveDamage(randomViking.attack());
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon);
        }
        return attakResult;
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let attakResult = randomViking.receiveDamage(randomSaxon.attack());
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking);
        }
        return attakResult;
    }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return 'Vikings have won the war of the century!';
        }
        if (this.vikingArmy.length <= 0) {
            return 'Saxons have fought for their lives and survived another day...';
        }
        if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
