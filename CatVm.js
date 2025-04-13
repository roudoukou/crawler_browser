const { VM, VMScript } = require('vm2');
const codeGenerate = require('./node_tools/CodeGenerate.js');
const { prototype } = require('events');
// var hello_vm2 = require('./Hello_vm2/hello_vm2.node.js')
// var hello_vm2_code = hello_vm2.Getcode({
//     proxy: false
// },
//     `
// hellovm.AddPlugin({description:'Portable Document Format',filename:'internal-pdf-viewer',name:'PDF Viewer',MimeTypes:[{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'},{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'}]})
// hellovm.AddPlugin({description:'Portable Document Format',filename:'internal-pdf-viewer',name:'PDF Viewer',MimeTypes:[{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'},{description: 'Portable Document Format',suffixes:'pdf1',type: 'application/pdf1'}]})

// `
// )

let catvmConfig = {
    memory: {
        prototypes: {},
        examples: {},
        config: {
            proxy: true
        }
    },
    DefConstructor(fn, illegal) {

    },
    DefPrototype(prototypeName, constructor, baseName, descriptor) {
        let prototypeBase = this.memory.prototypes['Object'];
        if (baseName) prototypeBase = this.memory.prototypes[baseName];
        if (prototypeName && constructor) {
            this.safefunction(constructor);
            this.memory.prototypes[prototypeName] = constructor.prototype;
            // this.memory.DefPropertyDescriptor(this.memory.prototypes, prototypeName, descriptor);
            this.memory.prototypes[prototypeName][Symbol.toStringTag] = constructor.name ? constructor.name : prototypeName;
        }
        if (prototypeBase) this.memory.prototypes[prototypeName].__proto__ = prototypeBase;
    },
    DefPrototypeProperty(prototypeName, propertyName, value) {
        this.safefunction(value)
        this.memory.prototypes[prototypeName][propertyName] = value;
    }
}

module.exports = {
    run(path_) {
        const vm2_code = codeGenerate(path_);

        const tempfile = `${__dirname}/debbuger.js`;
        const vm = new VM();
        let catvm = Object.assign(catvmConfig, {})
        vm.setGlobal('catvm', catvm)
        return vm.run(new VMScript(vm2_code, tempfile))
    }
}
