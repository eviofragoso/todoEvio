var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var tarefas = new Array();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    // if(tarefas.lenght>0){
    //     var index =0;
    //     for(index =0;index<tarefas.length;index++){
    //         socket.emit('todo',tarefas[index]);
    //     }
    // }
    socket.on('todo', function (data) {
        console.log(data.tarefa);
        io.emit('todo', data);
        tarefas.push(data);

    });
});




http.listen(3000, function () {
    console.log('listening on *:3000');
})