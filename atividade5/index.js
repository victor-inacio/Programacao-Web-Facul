const express = require("express")
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()

app.set('views', `${__dirname}/views`)
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {

    res.render('index.mustache', {
    })

})

app.post('/dados', (req, res) => {



    res.render('dados.mustache', { ...req.body })

})

app.listen(8080, () => {
    console.log('listening in port 8080')
})