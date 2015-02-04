function GoblinMobClass(level) {
    return {
        className: 'goblin mob',
        movementSpeed: (14 + (level / 0.01)),
        health: (5 + (level / 0.01)),
        mana: (1 + (savedLevel / 0.01)),
    }
}
