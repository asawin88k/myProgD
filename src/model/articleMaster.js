
const knex = require('../config/connect_db/connect_ora_client');

module.exports = articleModel = { 
 createData : async (param) => {
                           try {      
                               console.log("module create : " + param);     
                               let data = await knex('ARTICLE_MASTER').insert(param);  
                       //      let data = await knex('ARTICLE_MASTER').insert({"ITEM_CODE":'8000-39',"ARTICLE_TYPE":"B"});             
                               console.table(JSON.stringify(data));
                               return data ;
                            } catch(err) {
                              console.log(err);
                            }
   },

 readAllData : async () => { 
                           try {
                               let data = await knex('ARTICLE_MASTER').select(); 
                           //    console.table(JSON.stringify(data));
                               return data ;
                            } catch(err) {
                              console.log(err);
                            }

   } ,

 readData : async (param) => {
                            try { 
                            //  {"ITEM_CODE":'8000-39'}
                                let data = await knex('ARTICLE_MASTER').where(param).select();
                           //     console.table(JSON.stringify(data));
                           //   return JSON.stringify(data) ;
                                return data ;
                            } catch(err) {
                              console.log(err);
                            }

   } ,

 readData2 : async (param) => {
                              try {
                              //  {"ITEM_CODE":'8000-39'}
                                  let data = await knex('ARTICLE_MASTER').where(param).select();
                              //    console.table(JSON.stringify(data));
                                  return JSON.stringify(data) ;
                             } catch(err) {
                               console.log(err);
                             }

   } ,

   updateData : async (param,dataup) => {
                                         try {
                                             let data = await knex('ARTICLE_MASTER').where(param).update(dataup);
                                         //  let data = await knex('ARTICLE_MASTER').where({"ITEM_CODE":'8000-40'}).update({"ITEM_NAME":'xxx'});
                                             console.table(JSON.stringify(data));
                                             return data ;
                                         } catch(err) {
                                                           console.log(err);
                                         }
   } ,

  deleteData : async (param) => {
                                 try {
                                     let data = await knex('ARTICLE_MASTER').where(param).del();
                                     console.table(JSON.stringify(data));
                                     return data ;
                                 } catch(err) {
                                               console.log(err);
                                 }
  
  }
}
