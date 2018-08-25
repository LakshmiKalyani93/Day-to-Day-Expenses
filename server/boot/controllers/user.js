'use strict';
module.exports = (app) => {
    const User = app.models.user;
    const LogModel = app.models.LogModel;

    User.createUser = (data, cb) => {

        const log = {
            message: '[REQUEST]',
            method: '[createUser]',
            model: '[User]',
            data: data
        };
        LogModel.create(log, (err, logs) => {
            app.logger.INFO('[LogModel] - ', err, logs);
        });

        if (!!data) {
            User.create(data, cb);
        }
    }

    User.afterRemote('changePassword', (ctx, modelInstance, next) => {
        const result = {
            'status': 'sucsess',
            'message': 'Password changed successfully!!'
        }
        ctx.result = result;
        next();
    });

}