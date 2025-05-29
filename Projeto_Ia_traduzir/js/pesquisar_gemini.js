// guarda o elemento de id btn-pesquisar na variável botao_pesquisar

const botao_pesquisar = document.getElementById("btn-pesquisar");

botao_pesquisar.addEventListener("click", async function() {  // Associa o evento a função click ao botão

    const text = document.getElementById("text-pergunta");
    /*console.log(text.value);*/
    const key = ""; // já é a minha 
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + key; //Monta a url para fazer requisição para API do gemini com a chave
    // O gemini pede que a requisição seja .json e assim mesmo (não questionar)
    const dadosBody = {
        contents: [
            {
                parts:[
                    {
                        text: `${text.value}`
                    }
                ]
            }
        ]
    }
    // envia requisição como POST para a api
    const response = await fetch(url, { //fetch é requisição http
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, // cabeçário/tags
        body: JSON.stringify(dadosBody) // corpo e requisição em si
    });
    
    const dados = await response.json(); //pega a resposta da API em guarda em variável js

    /*console.log(dados.candidates[0].content.parts[0]) */

    const resposta = dados.candidates[0].content.parts[0].text // resposta da API
    document.getElementById("text-resposta").value = resposta

})
