const joi = require('joi');

module.exports = async (ctx, next) => {
  const schema = joi.object({
    name: joi
      .string()
      .trim()
      .required()
      .label('Genre Name')
  });
  const { body } = ctx.request;
  try {
    await schema.validate(body);
    await next();
  } catch (err) {
    ctx.throw(400, JSON.stringify(err));
  }
};
