function attack (actor, target) {
    return `${actor.name} attacks ${target.name}`;
}

function move (actor, x = 0, y = 0) {
    const { position } = actor;
    return {
        ...actor,
        position: {
            x: position.x + x,
            y: position.y + y
        }
    };
}

function defend (actor) {
    return `${actor.name} defends`;
}

export {
    attack,
    move,
    defend
};