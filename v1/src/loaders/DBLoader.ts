import mongoose from 'mongoose'
import log from '../scripts/logger'

export default function () {
  return mongoose
    .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    .then(() => log.info(`Connected to ${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`))
    .catch((err) => log.error(err))
}
