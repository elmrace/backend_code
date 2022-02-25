import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  format: format.json(),
  defaultMeta: { service: 'errors' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'v1/src/logs/error.log',
      level: 'error',
      format: format.combine(
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        format.align(),
        format.printf((error) => `${error.timestamp} ${error.level}: ${error.message}`)
      ),
    }),
  ],
})

export default logger
