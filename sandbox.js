debugger;
function XMLHttpRequest()
{
    this.timeout = 0;
    this.responseType = "";
    this.response = null;
}

(function(prototype_,names){
    names.forEach((name_)=>{
        prototype_[name_] = new TypeError("Illegal invocation");
    })
})(XMLHttpRequest.prototype,["timeout","responseType","onload","response"])


XMLHttpRequest.prototype.open = function open(method, url, async = true, user = "", password = ""){
    if(arguments.length>=2)
    {
        this.method = method;
        this.url = url;
        this.async = async;
        this.user = user;
        this.password = password;
    }
    else
    {
        throw new TypeError("Failed to execute 'open' on 'XMLHttpRequest': 2 arguments required, but only 0 present.")
    }
}
XMLHttpRequest.prototype.send = function send(body = null){

    let onresponse = (function(responseData){
        this.status = responseData.status;
        this.response = responseData;
        if(this.onload)
        {
            this.onload.call(this,responseData)
        }
    }).bind(this);

    this.body = body;
    catvm_node.axios({
        method: this.method,
        url: this.url,
        auth: {
            username: this.user,
            password: this.password
        },
        timeout: this.timeout,
        responseType: this.responseType==""?'text':this.responseType
    }).then(onresponse);
    
}

function zhiyuan(){
    //创建xhr对象 
    var xhr = new XMLHttpRequest();
    //设置xhr请求的超时时间
    xhr.timeout = 3000;
    //设置响应返回的数据格式
    xhr.responseType = "text";
    //创建一个 post 请求，采用异步
    xhr.open('GET', "http://ip.json-json.com/", true);
    //注册相关事件回调处理函数
    xhr.onload = function(e) { 
        return e.data;
    };
    //发送数据
    xhr.send();
    
}
setTimeout = function setTimeout(){};
async function zhiyuan1(){
    var rdata =  await catvm_node.axios({
        method: "GET",
        url: "http://httpbin.org/ip"
        // url: "https://pss.bdstatic.com/r/www/cache/static/protocol/https/bundles/es6-polyfill_5103265.js"
    });
    debugger;
    // return rdata.data;
    return eval(rdata.data);
}

zhiyuan1