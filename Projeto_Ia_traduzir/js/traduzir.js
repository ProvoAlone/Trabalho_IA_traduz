
const botao_traduzir = document.getElementById("btn-traduz");

function dividirTextoPorLimite(texto, limite = 500) {
  const regex = new RegExp(`.{1,${limite}}`, "g");
  const partes = texto.match(regex);

  return { dic: partes };
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

botao_traduzir.addEventListener("click", async function() {

    globalThis.old_value = document.getElementById("text-resposta").value;
    /*const link_api_1 = link_api.substring(0, 42)*/
    /*const link_api_2 = link_api.substring(42, 56)*/
    /*const link_api_1 = "https://api.mymemory.translated.net/get?q="*/
    /*const link_api_2 = "&langpair=pt|en"*/
    const txt_para_traduzir = document.getElementById("text-resposta");
    /*const link_api_f = link_api_1 + txt_para_traduzir.value + link_api_2*/
    const result2 = dividirTextoPorLimite(txt_para_traduzir.value)
    console.log(Array.isArray(result2))
    //final = APIchamaLista(result2["dic"])
    var final = "";
    for (const item of result2["dic"]){
      const link_api = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(item)}&langpair=pt|en`;
      const response = await fetch(link_api); //fetch é requisição http. Aq estou mandando requisição
      const trad_object = await response.json();
      const traducao = trad_object.responseData.translatedText;
      final += traducao
      sleep(15);
      console.log(final)
    };
    
    //console.log(txt_para_traduzir.value);
    console.log(final)
    document.getElementById("text-resposta").value = final;
        
});

const botao_reverter = document.getElementById("btn-volta");

botao_reverter.addEventListener("click", async function() {
  console.log(old_value);

  document.getElementById("text-resposta").value = old_value;

  
});

const botao_limpar = document.getElementById("btn-limpar-resp");

botao_limpar.addEventListener("click", async function () {
  document.getElementById("text-resposta").value = ""
  
});

const botao_limpar_pergunta = document.getElementById("btn-limpar");

botao_limpar_pergunta.addEventListener("click", async function () {
  document.getElementById("text-pergunta").value = ""
  

});