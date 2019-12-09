let messages = [];
let id = 0;

function addMessage(req,res){
    messages.push({
        text: req.body.text,
        time: req.body.time,
        id: id
    });
    id++;    
    res.status(200).json(messages);
}
function getMessage(req,res){
    res.status(200).json(messages);
}
function editMessage(req,res){
    let msg = req.body.text;
    let editId = req.params.id;
    let ind = messages.findIndex(e=>e.id == editId);
    messages[ind].text = msg;
    res.status(200).json(messages);
}
function deleteMessage(req,res){
    let delId = req.params.id;
    let ind = messages.findIndex(e=> e.id == delId);
    messages.splice(ind, 1);
    res.status(200).json(messages);
}

module.exports = {
    addMessage,
    getMessage,
    editMessage,
    deleteMessage
}