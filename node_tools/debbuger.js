//保护tostring
;(() => {
    'use strict';
    const $toString = Function.toString
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)))
    const myToString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this)
    }

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            'configurable': true,
            'writable': true,
            'value': value
        })
    }
    delete Function.prototype['toString']
    // Reflect.deleteProperty(Function.prototype,'toString')
    set_native(Function.prototype, 'toString', myToString)
    set_native(Function.prototype.toString, myFunction_toString_symbol, 'function toString(){ [native code] }')
    catvm.safefunction = (func) => {
        if (typeof func !== 'function') {
            set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`)
        }
    }
}).call(this);
catvm.DefPrototype('EventTarget', function EventTarget() {})
catvm.DefPrototypeProperty('EventTarget',"addEventListener", function addEventListener() {})
catvm.DefPrototypeProperty('EventTarget',"dispatchEvent", function dispatchEvent() {})
catvm.DefPrototypeProperty('EventTarget',"removeEventListener", function removeEventListener() {})
catvm.DefPrototype('WindowProperties', function WindowProperties() {}, 'EventTarget')

var Window = function Window() {
    throw new TypeError('Illegal constructor')
}

catvm.DefPrototype('Window', Window, 'WindowProperties')

Window.prototype.PERSISTENT=1;
Window.prototype.TEMPORARY=0;


window = this;

window.__proto__ = catvm.memory.prototypes.Window;

console.log(1);
debugger;
new Window();

debugger;

