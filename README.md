# challenge-amigo-secreto_pt-main
 Challenge amigo secreto - ONE Oracle.  
 Projeto desenvolvido na formação do programa ONE, uma parceria entre a Oracle e a Alura.
  
 O desafio do amigo secreto apresentado é uma atividade que envolve a criação de um projeto utilizando lógica de programação em JavaScript. Este código permite adicionar amigos a uma lista  e realizar sorteios para determinar quem é o amigo secreto. O sistema sorteia até 3 amigos, garantindo que não haja repetições.

**Funcionalidades:**

- Adicionar Amigos: Permite adicionar amigos à lista, verificando se o nome é válido (não vazio e não numérico), se o nome já foi inserido anteriormente e se o limite de 10 amigos foi atingido.
- Exibir Lista de Amigos: Após adicionar um amigo, a lista é exibida no formato de uma lista não ordenada.
- Sorteio de Amigos: Realiza o sorteio de até 3 amigos, garantindo que um mesmo amigo não seja sorteado mais de uma vez.
- Encerrar Sorteio: Após 3 sorteios, o sistema encerra o sorteio e exibe uma mensagem de fim de jogo.
  
**Fluxo do Código:**

**1. Função adicionarAmigo():**

- Objetivo: Adicionar um nome de amigo à lista.
- Validações: Verifica se o nome é válido, se já existe na lista ou se o limite de amigos foi alcançado.
- Exibição: Atualiza a lista de amigos no HTML.

**2. Função exibirListaAmigos():**

- Objetivo: Exibe a lista de amigos no elemento com o ID listaAmigos.
- Comportamento: Cria elementos <li> para cada amigo na lista e os adiciona ao HTML.
  
**3. Função sortearAmigo():**

- Objetivo: Realizar um sorteio aleatório de amigos.
- Validações: Garante que a lista de amigos não esteja vazia e que não haja sorteios repetidos.
- Limitação: Limita o número de sorteios a 3.
- Exibição: Exibe o nome do amigo sorteado no elemento #resultado e oculta a lista de amigos.

**4. Função encerrarSorteio():**

- Objetivo: Encerra o sorteio, limpa as listas e reinicia o contador de sorteios.
- Exibição: Reexibe a lista de amigos e limpa o resultado do sorteio.

**5. Função limparCampo():**

- Objetivo: Limpa o campo de entrada após adicionar um amigo.

**6. Evento de Teclado:**

- Objetivo: Permite que o usuário adicione um amigo pressionando a tecla Enter.

**Como Usar:**
- Abra o código HTML com o script JavaScript.
- Adicione amigos digitando os nomes no campo de entrada e pressionando "Enter" ou clicando no botão de adicionar.
- Após adicionar os amigos, clique no botão de sorteio para realizar o sorteio de até 3 amigos secretos.
- Após os 3 sorteios, o sistema irá encerrar automaticamente e limpar os dados.

**Observações:**
- O sistema aceita um máximo de 10 amigos.
- O nome do amigo não pode ser vazio ou numérico.
- O mesmo amigo não será sorteado mais de uma vez.
- Após o 3º sorteio, o sorteio será encerrado automaticamente.
