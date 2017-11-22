'use strict';

module.exports = function(Pedidoventa) {

    //Pedidoventa.disableRemoteMethodByName('create');    
    Pedidoventa.disableRemoteMethodByName('replaceOrCreate');    
    Pedidoventa.disableRemoteMethodByName('patchOrCreate');    
    Pedidoventa.disableRemoteMethodByName('exists');    
    Pedidoventa.disableRemoteMethodByName('upsert');    
    Pedidoventa.disableRemoteMethodByName('upsertWithWhere');    
    Pedidoventa.disableRemoteMethodByName('deleteById'); 
    Pedidoventa.disableRemoteMethodByName('replaceById');
    Pedidoventa.disableRemoteMethodByName('updateAll');  
    Pedidoventa.disableRemoteMethodByName('prototype.updateAttributes');
    Pedidoventa.disableRemoteMethodByName('createChangeStream');        

};
