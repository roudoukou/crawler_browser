/**
 * 需要浏览器运行
 * TODO: 后续做成可以导出所有的对象名称
 */

let result = []
function get_name(obj) {
    if (obj != null) {
        get_name(obj.__proto__)
    }
    try {
        obj[Symbol.toStringTag]?result.push(obj[Symbol.toStringTag]):console.log();
    } catch (error) {
        
    }
}

get_name(Window.prototype)

console.log(result);