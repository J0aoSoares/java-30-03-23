//substituindo palavras

let txt= "Estão chegando as provas"
console.log(txt.replace("provas", "avaliações"));

//apresentando valores depois vírgula

let num = 123.5256
document.write(num.toFixed(2))
document.write("<br><br>")


let num2 = 123.5256
document.write(num2.toPrecision(4))
document.write("<br><br>")


//caixa de alerta

//alert("Olá Mundo")

//caixa de confirmação

//let teste=confirm("Você é aluno?")

//document.write("O resultado é:", teste)

//caixa de prompt

let teste= prompt("digite seu nome")
document.write("O nome dele é: ", teste)

