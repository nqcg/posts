const express = require('express')
const connectDB = require('./config/db')
const posts = require('./router/posts')
const exhlb = require('express-handlebars')
//Khoi dong app
const app = express()

//Khoi dong handlebars middleware
app.engine('handlebars', exhlb())
app.set('view engine', 'handlebars')

//Khoi dong express middleware
app.use(express.json())

//Khoi tao co so du lieu
connectDB()

//Mot so router co ban, co the dua vao file
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))

//Khoi dong router 
app.use('/posts', posts)

//Khoi tao port
PORT = 5000

app.listen(PORT, () => {
    console.log(`Server khoi tao tai ${PORT}`)
})