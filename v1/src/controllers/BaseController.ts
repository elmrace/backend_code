import { Request, Response, NextFunction } from 'express'
import ApiError from '../errors/ApiError'
import BaseService from '../services/BaseService'
import httpStatus from 'http-status'

abstract class BaseController {
  private __Service: BaseService

  constructor(BaseService: BaseService) {
    this.__Service = BaseService
  }

  index = (req: Request, res: Response, next: NextFunction) => {
    return this.__Service
      .index()
      .then((data) => {
        return res.status(httpStatus.OK).json(data)
      })
      .catch((err) => {
        return next(
          new ApiError(err.message, httpStatus.BAD_REQUEST, 'index', req.headers['user-agent']?.toString() || 'Unknown')
        )
      })
  }

  show = (req: Request, res: Response, next: NextFunction) => {
    return this.__Service
      .show(req.params.id)
      .then((data) => {
        return res.status(httpStatus.OK).json(data)
      })
      .catch((err) => {
        return next(
          new ApiError(err.message, httpStatus.BAD_REQUEST, 'show', req.headers['user-agent']?.toString() || 'Unknown')
        )
      })
  }

  store = (req: Request, res: Response, next: NextFunction) => {
    return this.__Service
      .store(req.body)
      .then((data) => res.status(httpStatus.OK).json(data))
      .catch((err) =>
        next(
          new ApiError(err.message, httpStatus.BAD_REQUEST, 'store', req.headers['user-agent']?.toString() || 'Unknown')
        )
      )
  }

  update = (req: Request, res: Response, next: NextFunction) => {
    return this.__Service
      .update(req.params.id, req.body)
      .then((data) => res.status(httpStatus.OK).json(data))
      .catch((err) =>
        next(
          new ApiError(
            err.message,
            httpStatus.BAD_REQUEST,
            'update',
            req.headers['user-agent']?.toString() || 'Unknown'
          )
        )
      )
  }

  destroy = (req: Request, res: Response, next: NextFunction) => {
    return this.__Service
      .destroy(req.params.id)
      .then((data) => res.status(httpStatus.OK).json(data))
      .catch((err) =>
        next(
          new ApiError(
            err.message,
            httpStatus.BAD_REQUEST,
            'destroy',
            req.headers['user-agent']?.toString() || 'Unknown'
          )
        )
      )
  }
}

export default BaseController
