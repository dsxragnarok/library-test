(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.libtest = global.libtest || {})));
}(this, (function (exports) { 'use strict';

var Character = function () {
    function Character(_ref) {
        var _ref$name = _ref.name,
            name = _ref$name === undefined ? 'noname' : _ref$name,
            _ref$job = _ref.job,
            job = _ref$job === undefined ? 'hobo' : _ref$job,
            _ref$level = _ref.level,
            level = _ref$level === undefined ? 1 : _ref$level;
        babelHelpers.classCallCheck(this, Character);

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

    babelHelpers.createClass(Character, [{
        key: 'setAttribute',
        value: function setAttribute(name, value) {
            this.attributes[name] = value;
        }
    }, {
        key: 'getAttribute',
        value: function getAttribute(name) {
            return this.attributes[name];
        }
    }, {
        key: 'levelUp',
        value: function levelUp() {
            this.level += 1;
        }
    }]);
    return Character;
}();

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

var ACTIONS = {
    MOVE: 'MOVE',
    ATTACK: 'ATTACK',
    DEFEND: 'DEFEND',
    SKILL: 'SKILL',
    SPELL: 'SPELL',
    NONE: 'NONE'
};

exports.Character = Character;
exports.attack = attack;
exports.move = move;
exports.ACTIONS = ACTIONS;

Object.defineProperty(exports, '__esModule', { value: true });

})));
