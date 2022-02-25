import httpStatus from "http-status";
import ApiError from "../errors/ApiError";
import { Request, Response, NextFunction } from "express";
import log from "../scripts/logger";
import { Schema } from "joi";

const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const { value, error } = schema.validate(req.body);
  if (error) {
    error.details.forEach((element) => {
      switch (element.type) {
        case "any.required":
          element.message = `${element.context?.label} alanı zorunlu alandır.`;
          break;
        case "string.empty":
          element.message = `${element.context?.label} alanı boş olamaz.`;
          break;
        case "number.empty":
          element.message = `${element.context?.label} alanı boş olamaz.`;
          break;
        case "string.email":
          element.message = "Lütfen doğru bir email adresi girin";
          break;
        case "string.min":
          element.message = `${element.context?.label} alanı en az ${element.context?.limit} karakter olmalıdır.`;
          break;
        case "number.min":
          element.message = `${element.context?.label} alanı ${element.context?.limit} veya daha büyük olmalıdır.`;
          break;
        case "string.max":
          element.message = `${element.context?.label} alanı en fazla ${element.context?.limit} karakter olmalıdır.`;
          break;
        case "number.max":
          element.message = `${element.context?.label} alanı ${element.context?.limit} veya daha küçük olmalıdır.`;
          break;
        case "string.base":
          element.message = `${element.context?.label} alanı karakter türünde olmalıdır.`;
          break;
        case "number.base":
          element.message = `${element.context?.label} alanı sayı türünde olmalıdır.`;
          break;
      }
    });
    const errorMessage = error.details.map((element: any) => element.message).join(", ");
    log.error(errorMessage);
    return next(new ApiError(errorMessage, httpStatus.BAD_REQUEST, "Validation", req.headers["user-agent"]?.toString() || "Unknown"));
  }
  Object.assign(req, value);
  return next();
};

export default validate;
