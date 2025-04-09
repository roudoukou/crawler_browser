const axios = require("axios");
const {VM, VMScript}  = require('vm2');
const vm = new VM(); //上下文
const fs = require('fs');
const file = `${__dirname}/sandbox.js`;

vm.setGlobal("catvm_node",{
    axios:axios
});

const script = new VMScript(fs.readFileSync(file), `${__dirname}/code_temp.js`);

var zhiyuan1 = vm.run(script);

const express = require('express')
const app = express()

app.get('/ip',async function (req, res) {
  let a = await zhiyuan1();
  console.log(a);
  res.send(a || '123')
})
app.listen(3000)



debugger;