const express = require("express")
const port = 8080
const app = express()

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params
    console.log(a, b)
    const result = a - b

    return res
        .status(200)
        .send(String(result))
})

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params
    const result = a + b

    return res
        .status(200)
        .send(String(result))
})

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params
    const result = a * b

    return res
        .status(200)
        .send(String(result))
})

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params

    if (b == 0) {
        return res.
            status(500)
            .send("Não é possível dividir por zero")
    }

    const result = a / b



    return res
        .status(200)
        .send(String(result))
})



app.listen(port, () => {

    console.log("App running on port", port)

})
