'use strict';

exports.__esModule = true;

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

exports.default = Character;