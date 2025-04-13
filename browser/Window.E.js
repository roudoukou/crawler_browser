window = this;

window.__proto__ = catvm.memory.prototypes.Window;

delete Buffer;

window = this.catvm.proxy(window);