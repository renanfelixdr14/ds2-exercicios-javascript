# Fundamentos da Web

Este repositório contém os materiais e a atividade sobre os fundamentos da web e conceitos de páginas estáticas vs dinâmicas, Mas a página precisara de uma extensão do Vscode para funcionar,
conhecida como Live Server:

## O jeito de rodar

Abra a aba de extensões do VS Code no menu lateral esquerdo (ou aperte Ctrl + Shift + X).
Pesquise por Live Server e clique em Install.
Agora, vá no seu arquivo index.html.
Você tem duas opções para rodar:
Clique com o botão direito em qualquer lugar do código HTML e escolha "Open with Live Server".
Ou olhe bem no canto inferior direito da tela do VS Code, na barra azul, e clique num botãozinho escrito "Go Live".
O seu navegador padrão vai abrir automaticamente.

## Jeito alternativo com linux

Usando o Terminal (Com Python)
Como você está em um ambiente Linux você provavelmente tem o Python instalado nativamente.
Você pode subir um servidor direto pelo terminal.
Abra o seu terminal.
Navegue até a pasta do seu projeto:
{Caminho que você instalou o repositório}
Inicie um servidor local nativo do Python rodando este comando:
python3 -m http.server
Abra o seu navegador e acesse: http://localhost:8000


## Respostas da Atividade

### 1. Em qual momento uma página dinâmica é processada?
Uma página dinâmica é processada no **servidor**, no exato momento em que o usuário faz a requisição HTTP (ou seja, quando o navegador solicita a página). O servidor executa as regras de negócio e os scripts necessários para construir o código HTML sob demanda antes de enviá-lo de volta ao navegador.

### 2. Por que um banco de dados pode ser necessário?
Um banco de dados é necessário porque páginas dinâmicas costumam exibir conteúdos personalizados, atualizados e mutáveis (como perfis de usuários, catálogos de produtos, postagens, etc.) que não ficam fixos em arquivos de código. O banco de dados armazena essas informações de forma estruturada, permitindo que o servidor as consulte e utilize para montar a página personalizada para cada requisição.
EOF

## Tabela Comparativa: Página Estática vs Página Dinâmica

| Critério / Aspecto | Página Estática(Lado ao Cliente) | Página Dinâmica(Lado do Servidor) |
| :--- | :--- | :--- |
| **Local em que o código é executado** | Navegador do usuário (*Client-side*) | Servidor de aplicação (*Server-side*) |
| **Tecnologias de exemplo** | HTML5, CSS3, JavaScript, Tailwind CSS, Geradores Estáticos (Astro, Hugo, Jekyll) | Node.js (Express), Python (Djanfo/FastAPI), PHP, Java (Spring), SQL (PostgreSQL/MySQL), MongoDB |
| **Responsabilidades** | Renderizar a interface visual, aplicar formatação/estilos e tratar integrações locais simples do usuário | Processar regras de negócio, realizar autentificação/login, consultar banco de dados e gerar o conteúdo sob demanda |
| **Vantagens** | Carregamento ultra-rápido, hospedagem barata ou gratuita, excelente segurança e alta estabilidade | Conteúdo personalizado por usuário personalizado por usuário, atualizações em tempo real e capacidade de guardar/consultar dados em grande escala | 
| **Limitações** | Conteúdo estático (igual para todos os usuários); alterar informações exige modificar o código e refazer o *deploy* | Maior tempo de resposta, custo do servidor/infraestrutura mais elevado e maior superfície para ataques de segurança |
| **Exemplos de tarefas adequadas** | Portifólios pessoais, *landing pages* de vendas, documentações técnicas, sites institucionais e blogs simples | Feeds de redes sociais, carrinhos de e-commerce, internet banking, painéis administrativos e sistenas com login |

---

## Classificação de Operações: Client-side vs Server-side

1. **Validar se um campo obrigatório foi preenchido**
   * **Clasificação:** Possível em ambos.
   * **Justificativa:** No *cliente-side*, melhora a experiência do usuário foenecendo feedback instantâneo e poupa o servidor de requisições inúteis. No *server-side*, é obrigátorio por segurança, pois o usuário pode desativar o JavaScript ou enviar dados maliciosos diretamente pela API ignorando a interface.

2. **Consultar dados sigilosos de um cliente**
   * **Classificação:** Server-side
   * **Justificativa:** O navegador(cliente) é um ambiente inseguro e nunca deve ter acesso direto ao banco de dados. O servidor é responsavel por autentificar a requisição, acessar o banco de forma segura e devolver apenas os dados que aquele usuário tem permissão para visualizar.

3. **Alterar a cor de um botão após um clique**
   * **Classificação:** Cliente-side
   * **Justificativa:** É uma alteração puramente visual(Interface de Usuário - UI). Fazer uma requisição ao servidor apenas para mudar uma cor geraria lentidão(latência de rede) para algo que o navegador resolve instantâneamente usando CSS e JavaScript.

4. **Verificar login e senha de um banco de dados**
   * **Classificação:** Server-side.
   * **Justificativa:** O banco de dados que guarda os usuários e senhas (em hashes) fica restrito ao ambiente do servidor por segurança. O navegador apenas envia as credenciais digitadas, e o servidor faz a validação e diz se o acesso está liberado ou não.

5. **Calcular o total de uma compra**
   * **Classificação:** Possível em ambos.
   * **Justificativa:** No *client-side*, calcula-se se o valor em tempo real para exibir na tela enquanto o usuário adiciona produtos, melhorando a fluidez. No *server-side*, o recálculo é **obrigatório** no momento de fechar o pedido(Checkout), para garantir que os valores dos produtos não foram adulterados no navegador.

6. **Controlar uma sessão do usuário**
   * **Classificação:** Possível em ambos.
   * **Justificativa:** O servidor *server-side* é quem gera e valida o passe de acesso(Session ID, Token JWT) provando que o usuário está logado. O navegador *client-side* tem a responsabilidade de armazenar esse passe(em Cookies ou LocalStorage) e enviá-lo de volta em todas as requisições seguintes.

## Registrando erro intencional deixando no exercicio01 o "Console.log" com "c" maiusculo.

 * **Mensagem exibida:** Uncaught ReferenceError: Console is not defined
 * **Motivo:** ele trata o console como uma variavel pela primeira letra estar maiuscula ou seja case sensitivity.

 ## Explicação do por que usei convert no idade antes do calculo

  * **Motivo:** O resultado "205" acontece quando o prompt trás o que foi escrito(na questão a idade de 20 anos) como String, para o resultado aparecer de maneira correta é utilizado o "Number" *EX: Number(prompt("Escreva a sua idade:"))* que resulta em "25 anos".