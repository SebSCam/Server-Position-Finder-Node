const express =  require('express')
const app = express()
const list = ["Carlos","Fernando","Miguel","Laura","Nicolas","Sebastian","Alexander","Fabian","Stiven","Maria"];
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})

app.post('/searchPosition',(req,res)=>{
    console.log(searchPosition(req.body.position))
   res.send('<h2>'+ searchPosition(req.body.position)+'\n  <a href="index.html">Volver a Inicio</a')
})

function searchPosition(position, res) {
    if (list[position]!=null) {
        return 'The element at '+ position +' is: '+ list[position];
    }
}

app.listen(3000,()=>{
    console.log('Server ruasdnning http://localhost:3000')
})