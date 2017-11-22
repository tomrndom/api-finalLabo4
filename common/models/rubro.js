'use strict';

module.exports = function(Rubro) {

    Rubro.disableRemoteMethodByName('create');    
    Rubro.disableRemoteMethodByName('replaceOrCreate');    
    Rubro.disableRemoteMethodByName('patchOrCreate');    
    Rubro.disableRemoteMethodByName('exists');    
    Rubro.disableRemoteMethodByName('upsert');    
    Rubro.disableRemoteMethodByName('upsertWithWhere');    
    Rubro.disableRemoteMethodByName('deleteById'); 
    Rubro.disableRemoteMethodByName('replaceById');
    Rubro.disableRemoteMethodByName('updateAll');  
    Rubro.disableRemoteMethodByName('prototype.updateAttributes');
    Rubro.disableRemoteMethodByName('createChangeStream');        

};
