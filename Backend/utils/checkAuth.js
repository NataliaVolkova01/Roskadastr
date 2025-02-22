import jwt from 'jsonwebtoken'
import { serverLog, serverError } from './serverLog.js'
import { TOKEN_KEY } from '../PASSWORDS.js'

// Check user Authorization via token
export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

  if (!token) {
    return res.status(403).json({
      errorMsg: 'Нет доступа к запрашиваемому ресурсу',
    })
  }

  try {
    const decodedToken = jwt.verify(token, TOKEN_KEY)
    req.userId = decodedToken._id
    next()
  } catch (err) {
    serverError(err)
    res.status(403).json({
      errorMsg: 'Нет доступа к запрашиваемому ресурсу',
    })
  }
}
