/**
 * Function for rolling one or more dices
 * @param {int} eyes - number of eyes on the dice
 * @param {int} rolls - number of dices to roll
 * @returns {int} sum of all dice rolls
 */
function rollDice(eyes, rolls){
    return (Math.floor((Math.random() * eyes) + 1)*rolls);
}
