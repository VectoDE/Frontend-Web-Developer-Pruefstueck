const passwordValidator = require('password-validator');

const validationUtil = {
    validatePassword: (password) => {
        const schema = new passwordValidator();

        schema
            .is().min(8)
            .is().max(100)
            .has().uppercase()
            .has().lowercase()
            .has().digits()
            .has().not().spaces()
            .is().not().oneOf(['Passw0rd', 'Password123']);

        return schema.validate(password);
    },
};

module.exports = validationUtil;
