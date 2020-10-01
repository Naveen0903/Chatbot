const mongoose = require('mongoose');
const { 
        TAGSCHEMA, 
        MESSAGESCHEMA,
        OPTIONS,
        MONGOURI
    } = require("./config");
let fuzz = require('fuzzball');

mongoose.connect(MONGOURI, OPTIONS);

const getAnswer = async (question) => {
    try{
        question = question["q"].toLowerCase()
        let query = TAGSCHEMA.findOne({q: question});
        let res = await query.exec();
        if(res){
            return res.a;
        }else{
            query = TAGSCHEMA.find();
            res = await query.exec();
            for(let i in res){
                let match = fuzz.ratio(question, res[i]['q']);
                if(match > 90){
                    return res[i]['a'];
                }
            }
            return "";
        }
    }catch(err){
        return "Error! Something went wrong!";
    }
}

const saveMessage = async (id, data) =>{
    try{
        if(id){
            let query = MESSAGESCHEMA.findOne({_id: mongoose.Types.ObjectId(id)}).update({"$push":{messages: data}});
            let res = await query.exec();
            console.log(res);
            return 0;
        }else{
            let messageschema = new MESSAGESCHEMA();
            let Cid;
            messageschema.messages = data;
            Cid = await messageschema.save();
            
            return Cid._id;
        }
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    query: getAnswer,
    saveMessage

}