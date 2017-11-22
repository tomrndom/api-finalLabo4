'use strict';

module.exports = function(Articulo) {

    Articulo.disableRemoteMethodByName('create');    
    Articulo.disableRemoteMethodByName('replaceOrCreate');    
    Articulo.disableRemoteMethodByName('patchOrCreate');    
    Articulo.disableRemoteMethodByName('exists');    
    Articulo.disableRemoteMethodByName('upsert');    
    Articulo.disableRemoteMethodByName('upsertWithWhere');    
    Articulo.disableRemoteMethodByName('deleteById'); 
    Articulo.disableRemoteMethodByName('replaceById');
    Articulo.disableRemoteMethodByName('updateAll');  
    Articulo.disableRemoteMethodByName('prototype.updateAttributes');
    Articulo.disableRemoteMethodByName('createChangeStream');        

};
