import express from 'express'
import helmet from 'helmet'
import config from './config'
import ErrorHandling from './middlewares/ErrorHandling'
import log from './scripts/logger'
import loaders from './loaders'
import router from './api-routes'
import cors from 'cors'

config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())

app.listen(process.env.APP_PORT, () => {
  loaders()
  app.use('/api/v1/users', router.UserRoutes)
  app.use(ErrorHandling.handleError)
  app.use(ErrorHandling.notFoundError)
  log.info(`Server is running on port ${process.env.APP_PORT}`)
})
