const express = require('express');

const articleController = require('../controller/articleMaster.controller');
const articleModel = require('../model/articleMaster');

const route = express.Router();

route.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next();
})

route.get('/', (req, res, next) => {
   res.send(" apiget root route ");   
});

route.get('/read2/:article',async function (req, res, next) {    
    var id = req.params.article
    var param = {"ITEM_CODE" : id }
    let data = articleModel.readData(param);
    console.log(data);
    res.send(data);
})

route.get('/read/:article', articleController.getbyId)

route.get('/readall', articleController.getAll)

route.post('/create', articleController.create)

route.put('/update/:article', articleController.update)

route.get('/delete/:article', articleController.delete)

route.get('/about', function (req, res) {
    res.send('About ')
})

module.exports = route ;  