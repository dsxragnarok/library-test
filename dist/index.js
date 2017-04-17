(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.libtest = global.libtest || {})));
}(this, (function (exports) { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var Character = function () {
    function Character(_ref) {
        var _ref$name = _ref.name,
            name = _ref$name === undefined ? 'noname' : _ref$name,
            _ref$job = _ref.job,
            job = _ref$job === undefined ? 'hobo' : _ref$job,
            _ref$level = _ref.level,
            level = _ref$level === undefined ? 1 : _ref$level;
        classCallCheck(this, Character);

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

    createClass(Character, [{
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

    return _extends({}, actor, {
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
