
var Window = function Window() {
    throw new TypeError('Illegal constructor')
}

catvm.DefPrototype('Window', Window, 'WindowProperties')

Window.prototype.PERSISTENT=1;
Window.prototype.TEMPORARY=0;