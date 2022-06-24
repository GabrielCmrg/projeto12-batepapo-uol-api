import joi from 'joi';

const participantSchema = joi.object({
    name: joi.string().required(),
});

const messageSchema = joi.object({
    to: joi.string().required(),
    text: joi.string().required(),
    type: joi.string().valid('message', 'private_message').required(),
});

const headerSchema = joi.object({
    user: joi.string().required(),
}).unknown(true);

export { messageSchema, participantSchema, headerSchema };