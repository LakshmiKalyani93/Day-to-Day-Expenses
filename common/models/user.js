'use strict';

module.exports = function (User) {
    User.validatesUniquenessOf('username', {
        message: 'A user with the username already exists!'
    });
    User.validatesUniquenessOf('email', {
        message: 'A user with the email already exists!'
    });
    User.validatesUniquenessOf('phoneNumber', {
        message: 'A user with the phoneNumber already exists!'
    });
};
