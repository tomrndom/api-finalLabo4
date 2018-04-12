'use strict';

module.exports = function (Rubro) {

    Rubro.observe('access', function logQuery(ctx, next) {
        console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
        console.log('Checking %s headers', ctx.Model.modelname, ctx.options);
        if(ctx.options.accessToken != null){
            console.log("viene token");
            next();
        } else {
            console.log("no token");
            var error = new Error();
            error.status = 400;
            error.message = 'Invalid request';
            error.code = 'INVALID_REQUEST';             
            next(error);
        }
    });

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
