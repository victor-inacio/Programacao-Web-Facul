const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")

const operation = document.querySelector("#operation")
const resultNode = document.querySelector("#result")

num1.addEventListener("change", (e) => {
    execute()
})

num2.addEventListener("change", (e) => {
    execute()
})

operation.addEventListener("change", (e) => {
    execute()
})

function execute() {

    let result = 0
    const op = parseInt(operation.value)
    const n1 = parseInt(num1.value)
    const n2 = parseInt(num2.value)


    switch (op) {
        case 0:
            result = n1 + n2
            break;
        case 1:
            result = n1 - n2
            break;
        case 2:
            result = n1 * n2
            break;
        case 3:
            result = n1 / n2

            if (n2 === 0) {
                result = "Vc tentou dividir por zero. Vc morreu"
            }
            break;
    }

    resultNode.innerHTML = result.toString()

}

