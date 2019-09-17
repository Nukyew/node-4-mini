require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const ctrl = require('./messagesCtrl')
const session = require('express-session')
const middleware = require('./middleware')

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))
app.use(middleware.filterWords)
app.get('/api/messages', ctrl.getAllMessages)
app.post('/api/message', ctrl.createMessage)
app.get('/api/messages/history', ctrl.history)

app.listen(SERVER_PORT, console.log(`${SERVER_PORT} songs stuck in my head`))