// Sempre que clicar no botao ira trocar a cor da caixa azul para amarelo
document.getElementById("btn-muda-cor").addEventListener("click" , function(){
    document.querySelector(".caixa-azul").setAttribute("class" ,
    "amarelo" )
})