//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteados = [];
let sorteiosCont = 0;
let limiteAmigos = 10;

function adicionarAmigo(){
    let inserirNome = document.querySelector('input').value;
    console.log(amigos)

    // Verifica se o nome está vazio ou se é um número
    if(!inserirNome || !isNaN(inserirNome)){
        alert('Por favor, insira um nome válido.');
    } else if (amigos.some(nome => nome.toLowerCase() === inserirNome.toLowerCase())){
        // Verifica se o nome já está na lista
        alert('Este nome já foi adicionado à lista.');
    } else if(amigos.length >= limiteAmigos){
        alert(`O limite de ${limiteAmigos} amigos foi atingido. Não é possível adicionar mais amigos.`);
    } else{
        amigos.push(inserirNome);
        exibirListaAmigos();
    }
    limparCampo();
}

function exibirListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Inicia um loop que percorre cada elemento do array 'amigos'
    for (let i = 0; i < amigos.length; i++){
        // Cria um novo elemento <li> (item de lista)
        const li = document.createElement('li');
        // Define o conteúdo de texto do <li> como o nome do amigo presente no array 'amigos' no índice 'i'
        li.textContent = amigos[i].toUpperCase();
        // Adiciona o novo item de lista (<li>) ao elemento HTML com o id 'listaAmigos'
        listaAmigos.appendChild(li);
    }

}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Não há amigos para sortear.');
        return;
    } 
    if(sorteiosCont < 3){
        let amigoSorteado;
        do {
            amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        } while (sorteados.includes(amigoSorteado));

        sorteados.push(amigoSorteado);
        console.log(sorteados)
        document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${amigoSorteado.toUpperCase()}<br>Parabéns! 🏆`;
        document.getElementById('listaAmigos').style.display = 'none';
        sorteiosCont++;

        if(sorteiosCont === 3){
            setTimeout(() => {
                alert('Já sorteamos 3 amigos! Sorteio encerrado.');
                document.getElementById('resultado').innerHTML = ''; // Limpa o resultado do sorteio
                encerrarSorteio(); // Encerra o jogo
            }, 2000); // Atraso de 2 segundos antes de encerrar
        }
        
    } 
    
}

function encerrarSorteio() {
    amigos = [];
    sorteados = [];
    sorteiosCont = 0;
    document.getElementById('listaAmigos').style.display = 'block';
    exibirListaAmigos();

}

function limparCampo(){
    inserirNome = document.querySelector('input');
    inserirNome.value = '';

}

// Adiciona o evento de 'keydown' para permitir o uso do Enter
document.querySelector('input').addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada foi o 'Enter'
    if (event.key === 'Enter') {  
        adicionarAmigo();         
    }
});