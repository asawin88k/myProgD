const articleModel = require('../model/articleMaster');

module.exports = articleData = {getAll  : async (req, res, next) => {     
                                                 let data = await articleModel.readAllData();
                                          //       console.log(data);
                                                 res.json(data);
                                                 },
                                getbyId : async (req, res, next) => { 
                                                 var id = req.params.article
                                                 var param = {"ITEM_CODE" : id }
                                                 let data = await articleModel.readData(param);
                                          //       console.log(data);
                                                 res.json(data);
                                                 },
                                create : async (req, res, next) => {      
                                                 console.log("controller create : " + req.body); 
                                                 let data = await articleModel.createData(req.body);
                                                 console.log(data);
                                                 res.json(data);
                                                 },
                                update : async (req, res, next) => {    
                                                 var id = req.params.article 
                                                 var param = {"ITEM_CODE" : id}
                                                 var dataup = req.body	 					
                                                 let data = await articleModel.updateData(param,dataup);	 
                                                 console.log(data);
                                                 res.json(data);
                                                 },
                                delete : async (req, res, next) => {    
                                                 var id = req.params.article
                                                 var param = {"ITEM_CODE" : id }
                                                 let data = await articleModel.deleteData(param);
                                                 console.log(data);
                                                 res.json(data);
                                                 },                             
                                }; 

