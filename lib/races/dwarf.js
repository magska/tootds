function dwarfClass(savedLevel) {
    return {
        savedLevel: savedLevel || 1,
        level: 1 * savedLevel,
        movementSpeed: 2,
        stamina: 100 + (savedLevel / 0.1),
        health: 100 + (savedLevel / 0.1),
        mana: 10 + (savedLevel / 0.01),
        levelUp: function(){
            this.level++;
            this.updateLevel(this.level)
        }
        updateLevel: function(level){
            this.stamina = 100 + (level / 0.1);
            this.health = 100 + (level / 0.1);
            this.mana = 10 + (level / 0.01);
        }
    }
}
