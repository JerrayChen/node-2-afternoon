let express = require('express');
let app = express();
let { addMessage, getMessage, editMessage, deleteMessage } = require('./controller/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const port = 3001;

app.listen(port, () => { console.log('Listening to port ' + port + '!') });

app.post("/api/messages", addMessage);
app.get("/api/messages", getMessage);
app.put("/api/messages/:id", editMessage);
app.delete("/api/messages/:id", deleteMessage);