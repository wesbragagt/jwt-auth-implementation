const joi = require('@hapi/joi');

module.exports = {
    registerValidation: (data) => {
        const schema = joi.object({
            firstName: joi
                .string()
                .min(2)
                .required(),
            lastName: joi
                .string()
                .min(2)
                .required(),
            email: joi
                .string()
                .email()
                .min(6)
                .required(),
            password: joi
                .string()
                .min(6)
                .required()
        });
        return schema.validate(data);
    },

    loginValidation: (data) => {
        const schema = joi.object({
            email: joi
                .string()
                .email()
                .min(6)
                .required(),
            password: joi
                .string()
                .min(6)
                .required()
        });
        return schema.validate(data);
    }
};
