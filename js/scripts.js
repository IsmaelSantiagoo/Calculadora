// função para criar expressão//selecionar todos os elementos "td"
const td = document.getElementsByTagName("td")
//selecionar elemento #expression
const exp = document.getElementById("expression")
//selecionar elemento #result
const res = document.getElementById("result")

function make_expression(value) {

    exp.innerText += value
}

//função para limpar dados
function clear_expression() {
    exp.innerText = ""
    res.innerText = "0"
}

// função para gerenciar botões pressionados
function manage_buttons(element) {

    el = element.innerText

    if (el === "c") {
        clear_expression()

    } else if (el === "±") {

        make_expression("-")

    } else if (el === "=") {

        if (exp.innerText === "") {
            res.innerText = "0"

        } else if (exp.innerText.includes("x")) {

            result = eval(exp.innerText.replace("x", "*"))
            res.innerText = result

        } else if (exp.innerText.includes("÷")) {

            result = eval(exp.innerText.replace("÷", "/"))
            res.innerText = result

        } else {

            result = eval(exp.innerText)
            res.innerText = result
        }
           
    } else {
        make_expression(el)
    }
}

//adicionar evento de clique em todos os elementos "td"
for ( let i of td) {
    i.addEventListener("click", () => {
        
        manage_buttons(i)
    })
}