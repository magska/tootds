function PlayerClass(raceClass, name, level){
    return {
        name: name,
        race: raceClass,
        level: level,
        getMovementSpeed: function(){
            return this.race.movementSpeed;
        }
    }
}
