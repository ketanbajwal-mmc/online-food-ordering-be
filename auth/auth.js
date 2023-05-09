module.exports = function (options) {
    
    // get user, validate token b4 here
    user.permissions.forEach(permission => {
        if (options.allowedGroup.indexOf(permission)){
            // if authenticated
            return next();
        }
    });

    // could not authenticate at this point
    return next(errorHandler) // throw a error or handle it way you want
}