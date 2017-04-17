class Character {
    constructor ({ name = 'noname', job = 'hobo', level = 1 }) {
        // initialize some stuff here and stuff

        this.attributes = {
            strength: 10,
            constitution: 10,
            dexterity: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        };

        this.name = name;
        this.job = job;
        this.level = level;
    }

    setAttribute (name, value) {
        this.attributes[name] = value;
    }

    getAttribute (name) {
        return this.attributes[name];
    }

    levelUp () {
        this.level += 1;
    }
}

export default Character;
