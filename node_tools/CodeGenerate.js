const fs = require('fs');

module.exports = function(path_) {

    let code = '';

    function AddBrowser(path) {
        code += fs.readFileSync('./browser/' + path) + '\r\n';
    }

    function AddJSPath(path) {
        code += fs.readFileSync(path) + '\r\n';
    }

    function AddJS(jscode_) {
        code += jscode_ + '\r\n';
    }
    

    AddBrowser(`vm_tools/vm_safefunction.js`);

    // 加载浏览器环境

    // 加载原型
    AddBrowser('EventTarget.P.js');
    AddBrowser('WindowProperties.P.js');
    AddBrowser('Window.P.js');

    // 加载实例
    AddBrowser('EventTarget.E.js');
    AddBrowser('WindowProperties.E.js');
    AddBrowser('Window.E.js');

    // 配置 this
    
    code += fs.readFileSync(path_);
    fs.writeFileSync(`${__dirname}/debbuger.js`, code);
    return code;
}