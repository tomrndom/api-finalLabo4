'use strict';

module.exports = function(Domicilio) {

    Domicilio.disableRemoteMethodByName('create');    
    Domicilio.disableRemoteMethodByName('replaceOrCreate');    
    Domicilio.disableRemoteMethodByName('patchOrCreate');    
    Domicilio.disableRemoteMethodByName('exists');    
    Domicilio.disableRemoteMethodByName('upsert');    
    Domicilio.disableRemoteMethodByName('upsertWithWhere');    
    Domicilio.disableRemoteMethodByName('deleteById'); 
    Domicilio.disableRemoteMethodByName('replaceById');
    Domicilio.disableRemoteMethodByName('updateAll');  
    Domicilio.disableRemoteMethodByName('prototype.updateAttributes');
    Domicilio.disableRemoteMethodByName('createChangeStream');        

};
