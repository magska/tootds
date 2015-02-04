function NinjaClass(savedLevel) {
    return {
        className: 'ninja',
        savedLevel: savedLevel || 1,
        level: (1 * savedLevel),
        movementSpeed: (15 + (savedLevel / 0.01)),
        stamina: (85 + (savedLevel / 0.1)),
        health: (75 + (savedLevel / 0.1)),
        mana: (10 + (savedLevel / 0.01)),
        dexterity: (100 + (savedLevel / 0.1)),

        levelUp: function(){
            this.level++;
            this.updateLevel(this.level);
        },
        updateLevel: function(level){
            this.stamina = (100 + (level / 0.1));
            this.health = (100 + (level / 0.1));
            this.mana = (10 + (level / 0.01));
            this.movementSpeed = (15 + (level / 0.01));
            this.dexterity = (100 + (level / 0.1));
        },
    }
}
