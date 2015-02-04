function dwarfClass(level) {
    return {
        level: level || 1,
        movementSpeed: 2 * (level),
        stamina: 100,
        health: 100,
        mana: 10,
    }
}
