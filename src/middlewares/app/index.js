import helmet from 'helmet'
import express from 'express'
import cookieParser from 'cookie-parser'

import authentication from './authentication'

const load = (app) => {
  app.use((req, res, next) => {
    // Website you wish to allow to connect
    const allowedOrigins = [
      'http://localhost:3000'
    ]

    const { origin } = req.headers
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin)
    }

    // Request methods you wish to allow
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )

    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
  })

  app.use(helmet({
    contentSecurityPolicy: false
  }))

  app.use(express.json())

  app.use(express.urlencoded({ extended: true }))

  app.use(cookieParser())

  app.use(authentication)
}

export default load
