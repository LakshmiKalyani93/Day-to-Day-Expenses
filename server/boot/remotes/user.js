'use strict';
module.exports = (app) => {
    const User = app.models.user;
    User.remoteMethod('createUser', {
        description: 'user registration',
        accepts: [
            { arg: 'data', type: 'createuser', required: true, http: { source: 'body' } },
        ],
        returns: {
            type: 'object',
            root: true
        },
        http: {
            verb: 'post',
            path: '/createUser',
            status: 200,
            errorStatus: 400
        }
    });
}