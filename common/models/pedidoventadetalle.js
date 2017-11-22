'use strict';

module.exports = function(Pedidoventadetalle) {

    //Pedidoventadetalle.disableRemoteMethodByName('create');    
    Pedidoventadetalle.disableRemoteMethodByName('replaceOrCreate');    
    Pedidoventadetalle.disableRemoteMethodByName('patchOrCreate');    
    Pedidoventadetalle.disableRemoteMethodByName('exists');    
    Pedidoventadetalle.disableRemoteMethodByName('upsert');    
    Pedidoventadetalle.disableRemoteMethodByName('upsertWithWhere');    
    Pedidoventadetalle.disableRemoteMethodByName('deleteById'); 
    Pedidoventadetalle.disableRemoteMethodByName('replaceById');
    Pedidoventadetalle.disableRemoteMethodByName('updateAll');  
    Pedidoventadetalle.disableRemoteMethodByName('prototype.updateAttributes');
    Pedidoventadetalle.disableRemoteMethodByName('createChangeStream');        

};
