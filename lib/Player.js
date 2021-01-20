const Potion = require('../lib/Potion')

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion(), new Potion()];

    // // returs an object with various player peroperties
    // this.getStats = function () {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility,
    //     };
    // };

    // // returns the inventory array or false if empty
    // this.getInventory = function () {
    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }
    //     else {
    //         return false;
    //     };
    // }
}

// returs an object with various player peroperties
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility,
    };
};

// returns the inventory array or false if empty
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    else {
        return false;
    };
}

module.exports = Player;