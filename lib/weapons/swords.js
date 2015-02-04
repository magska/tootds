function ShortSword(){
    return {
        range: 1,
        baseDamage: 10,
        diceRolls: 1,
        diceEyes: 6,
        hands: 1,
        idealClasses: {},
        description: 'A basic sword.',
    }
}
function LongSword(){
    return {
        range: 2,
        baseDamage: 20,
        diceRolls: 1,
        diceEyes: 12,
        hands: 2,
        idealClasses: {},
        description: 'A long, two handed sword with good range.'
    }
}
function Katana(){
    return {
        range: 2,
        baseDamage: 15,
        diceRolls: 1,
        diceEyes: 12,
        hands: 2,
        idealClasses: {
            ninja: 10,
        }
        description: 'A long, two handed sword with good range.'
    }
}
