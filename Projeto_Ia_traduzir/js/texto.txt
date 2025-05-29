const resultado = document.querySelector(".conteudo");
const search    = document.querySelector("#search")

setInterval(() => {
           
let texto = "Olá, como posso te ajudar?"; //obter o texto do input a ser mostrado
let letra = 0; //letra em que vai
resultado.textContent = ""; //limpar o que estava escrito antes

let timer = setInterval(() => {
  if (letra < texto.length){ //se ainda não chegou ao fim
    //escreve a letra e avança para a próxima
    resultado.textContent += texto[letra++]; 
  }
  else { //se chegou ao fim
    clearInterval(timer); //para a temporização
  }
}, 200); //200 milisegundos entre cada letra

}, 5900);



