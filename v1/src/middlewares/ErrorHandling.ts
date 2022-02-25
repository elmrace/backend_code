import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import ApiError from '../errors/ApiError'
import ErrorLogger from '../scripts/logger/Error'

const handleError = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  ErrorLogger.error(`${err.method} ${err.agent} ${err.status} ${err.message}`)
  return res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
    error: {
      message: err.message,
      code: err.status,
    },
  })
}

const notFoundError = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    error: {
      message: 'Page Not Found',
      code: httpStatus.NOT_FOUND,
    },
  })
}

export default { handleError, notFoundError }
