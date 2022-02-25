import Joi from "joi";

const createValidation = Joi.object({
  name: Joi.string().required().min(5).label("Adı Soyadı"),
  email: Joi.string().email().label("EPosta"),
  password: Joi.string().label("Parola"),
  gsm: Joi.string().required().min(9).label("Cep Telefonu"),
  user_type: Joi.string().required().label("Kullanıcı Türü"),
});

const updateValidation = Joi.object({
  name: Joi.string().min(5).label("Adı Soyadı"),
  email: Joi.string().email().label("EPosta"),
  password: Joi.string().label("Parola"),
  gsm: Joi.string().min(9).label("Cep Telefonu"),
  user_type: Joi.string().label("Kullanıcı Türü"),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required().min(10).label("EPosta"),
  password: Joi.string().required().min(5).label("Parola"),
});

export default { createValidation, updateValidation, loginValidation };
