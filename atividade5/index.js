const express = require("express")
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()

app.set('views', `${__dirname}/views`)
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {

    let error = req.query.valid == 0

    res.render('index.mustache', {
        error
    })

})

app.post('/dados', (req, res) => {
    console.log(req.body);

    let isAll = Object.values(req.body).every((a) => {

        return a !== ''
    })

    if (!isAll) {
        return res.redirect('/?valid=0')
    }

    res.render('dados.mustache', { ...req.body })

})

app.listen(8080, () => {
    console.log('listening in port 8080')
})