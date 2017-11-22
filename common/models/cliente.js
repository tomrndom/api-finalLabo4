'use strict';

module.exports = function(Cliente) {

    Cliente.disableRemoteMethodByName('create');    
    Cliente.disableRemoteMethodByName('replaceOrCreate');    
    Cliente.disableRemoteMethodByName('patchOrCreate');    
    Cliente.disableRemoteMethodByName('exists');    
    Cliente.disableRemoteMethodByName('upsert');    
    Cliente.disableRemoteMethodByName('upsertWithWhere');    
    Cliente.disableRemoteMethodByName('deleteById'); 
    Cliente.disableRemoteMethodByName('replaceById');
    Cliente.disableRemoteMethodByName('updateAll');  
    Cliente.disableRemoteMethodByName('prototype.updateAttributes');
    Cliente.disableRemoteMethodByName('createChangeStream');        

};
