var express = require('express');
var router = express.Router();
var {
    query,
    saveMessage
} = require("./chat");

router.get('/chat', async(req, res) => {
    let data =  req.query;
    let reply = await query(data);
    res.send({a: reply});
});

router.get('/messages', async(req, res)=>{
    let {
        id='',
        messages 
    } = req.body;
    let status = await saveMessage(id, messages);
    // if("_id" in status){
    //     req.session.userId = status["_id"]
    // }
    res.send({id: status});
});


module.exports = router;
