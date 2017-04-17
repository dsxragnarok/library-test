function attack(actor, target) {
    return actor.name + " attacks " + target.name;
}

function move(actor) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var position = actor.position;

    return babelHelpers.extends({}, actor, {
        position: {
            x: position.x + x,
            y: position.y + y
        }
    });
}

function defend(actor) {
    return actor.name + " defends";
}

export { attack, move, defend };