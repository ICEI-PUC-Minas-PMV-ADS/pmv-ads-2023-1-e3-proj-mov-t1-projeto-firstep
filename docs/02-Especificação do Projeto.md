# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.


## Personas

|    Nathália Souza | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/imagem_nathalia.jpg" width = 250>| **Idade:** 37 anos <br> **Ocupação:** formada em Engenharia de Software e fazendo pós graduação em Ciência de dados|**Aplicativos:**<br><ul>● Instagram <br>● Linkedin <br>● Telegram<br>● WhatsApp <br></ul>|
|**Motivações:**<br><ul>● Concluir a faculdade. <br><br>● Adquirir experiências com metodologias agéis. </ul>|**Frustrações:**<br><ul>● Dificuldade em conseguir estágio por não ter experiência; <br><br>● Na faculdade não tem muita oportunidade de praticar a metodologia Ágil aplicada ao desenvolvimento de software.   |**Hobbies/Histórias:**<br><ul>● Cozinhar <br>● Ler livros <br>● Viajar <br></ul>|

|    Lucas Hideaki | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/HIDEAKI.jpg" width = 250>| **Idade:**  23 anos <br> **Ocupação:** Recém Formado em Análise e Desenvolvimento |**Aplicativos:**<br><ul>● Instagram <br>● GitHub <br>● Discord<br>● Team Microsoft <br></ul>|
|**Motivações:**<br><ul>● Gosta muito de utilizar aplicativos e por isso, quer se aprofundar mais nessa programação.    <br><br>● Conectar com pessoas para que possa desenvolver sistemas do nosso interesse.   </ul>|**Frustrações:**<br><ul>● Recentemente participou de um processo seletivo para júniores e estagiários, mesmo enviando vários trabalhos que havia feito o recrutador informou que a vaga foi ocupada por programadores mais experientes; <br><br>● Maior frustação é estar formado e não ter consigo colocação na área.    |**Hobbies/Histórias:**<br><ul>● Gosta de jogar jogos on-line <br>● Aprender programação em cursos de curta duração. <br> <br></ul>|


|    Kwame Dume| Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/Dume.jpg" width = 250>| **Idade:**  46 anos <br> **Ocupação:** Motorista de aplicativo cursando faculdade de análise e desenvolvimento de sistema. |**Aplicativos:**<br><ul>● Instagram <br>● Facebook  <br>● Twitter <br>● Team Microsoft <br></ul>|
|**Motivações:**<br><ul>● Encontrar grupos que trabalhem com linguagens de programação do seu interesse;     <br><br>● Ser um ótimo programador, sempre se atualizando e buscando por novos cursos na área. </ul>|**Frustrações:**<br><ul>● Devido à falta de experiência há poucas oportunidades, inclusive para estágios. |**Hobbies/Histórias:**<br><ul>● Jogar futebol; <br>● Tocar violão.  <br> <br></ul>|


|    Jenifer Damasceno| Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/PersonaJenifer.png" width = 250>| **Idade:**  30 anos <br> **Ocupação:** Estudante de Análise e Desenvolvimento de Sistemas, já formada em Engenharia Civil e atuando nesta área. |**Aplicativos:**<br><ul>● Twitter <br>● Instagram  <br>● Whatsapp <br></ul>|
|**Motivações:**<br><ul>● Deseja realizar transição de carreira e assim, se dedicar apenas a área de desenvolvimento de software.    <br> </ul>|**Frustrações:**<br><ul>● Já se candidatou em vários processos seletivos, mas não conseguiu chegar a fase de entrevistas. <br><ul>|**Hobbies/Histórias:**<br><ul>● Ir ao teatro; <br>● Ir a shows;  <br> ● Ir a praia;<br></ul>|
 
 |    Ana Almeida| Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/Ana.jpg" width = 250>| **Idade:**  37 anos <br> **Ocupação:** Estudante de Engenharia de Software |**Aplicativos:**<br><ul>● Instagram <br>● Linkedin  <br>● Telegram <br>● Whatsapp<br></ul>|
|**Motivações:**<br><ul>● Poder unir a estatística, sua área de formação, a análise de dados; <br> ● Conquistar uma vaga de emprego com um bom salário;<br> ● Aplicar a vagas em outros países.   <br> </ul>|**Frustrações:**<br><ul>● Participou de vários processos seletivos, mas perdeu a vaga para alguém com experiência; <br>● Dificuldade em montar um portfólio.  <br><ul>|**Hobbies/Histórias:**<br><ul>● Ler livros; <br>● Viajar;  <br> ● Ler sobre as novidades na área de tecnologia;<br> ● Gosta de estudar novos idiomas  <br></ul>|
 
 |    Mateus Coelho| Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/Mateus.jpeg" width = 250>| **Idade:**  23 anos <br> **Ocupação:** Estudante de Ciências da computação. |**Aplicativos:**<br><ul>● Instagram <br> ● Linkedin  <br>● Telegram <br></ul>|
|**Motivações:**<br><ul>● Concluir a faculdade; <br><br>● Entrar no mercado de trabalho; <br><br>● Ser referência como desenvolvedor front end. <br> </ul>|**Frustrações:**<br><ul>● Dificuldade em conseguir emprego que não cobre experiência; <br><br>● Dificuldade em desenvolver um software completo por se aprofundar em front-end e ter pouco conhecimento com backend;  <br><br>● Falta de criatividade para criar projetos para portfólio; <br><br>● Dificuldade em fazer networking.  <br><ul>|**Hobbies/Histórias:**<br><ul>● Cozinhar; <br>● Jogar jogos online;  <br> ● Andar de bicicleta; <br> ● Assistir séries. <br></ul>|



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Lucas Hideaki   |  Conseguir se ligar a projetos com ideias nas quais se conecte através de Aplicativo Móvel             | Para contribuir no desenvolvimento de sistemas e ganhar experiências.              |
| Lucas Hideaki   |  Quer ter certeza que os projetos propostos estão de acordo com que o mercado está exigindo           | Para ter maior aproveitamento de aprendizagem. .              |
| Kwame Dume   | Quer uma busca específica, por projetos ao qual possa participar| Para trocar experiências e aprendizagem. 
| Kwame Dume   | Trabalhar com vários tipos de linguagem de programação | Para adquirir ampla experiência e poder entrar no mercado de trabalho.
| Kwame Dume   | Conseguir expor seus projetos de forma que outras pessoas também possam participar | Para criar um grupo de desenvolvimento.            
| Jenifer Damasceno  | Busca apoio de tutores  | Para Identificar pontos de melhorias na programação e realizar transição de carreira. 
| Mateus Coelho  | Conhecer outros desenvolvedores   | Para poder atuar em projetos juntos.
| Mateus Coelho  | Absorver diferentes ideias de projetos   | Para desenvolver soluções inovadoras. |
| Nathália Souza |  Ter oportunidade de praticar a metodologia Ágil no desenvolvimento de um projeto de software          | Para conseguir um estágio na área.              |
| Ana Almeida | Poder atuar em vários projetos|Para poder montar um portifólio bom e diversificado|

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Embora haja grande demanda por profissionais de Tecnologia da Informação, muitos estudantes e recém-formados da área encontram bastante dificuldade de ingressar no mercado de trabalho. Isso ocorre, em grande parte, porque a maioria das vagas requer experiência profissional prévia. Dessa forma, muitos estudantes se dedicam a montar um portfólio pessoal de projetos como forma de demonstrar seus conhecimentos técnicos e utilizam o GitHub como repositório (ALCÂNTARA, OLIVEIRA, SILVA, 2022).  

Além disso, a rede social Linkedin é muito utilizada para criar conexões profissionais e divulgar os projetos feitos. Assim, recrutadores podem conhecer mais a pessoa e seu conhecimento profissional o que facilitaria uma futura contratação. Outro caminho muito procurado por estudantes são os bootcamps, treinamentos intensivos, muitas vezes realizados por empresas que buscam selecionar os melhores estudantes para ocupar vagas de emprego na sua empresa (SOUZA, 2022).  

No entanto, muitos estudantes sentem dificuldade de criar sozinhos projetos para seu portfólio pessoal e, quando participam dos bootcamps, muitos não conseguem acompanhar o treinamento por causa dos prazos curtos, além de abordarem somente temas de interesse da empresa que não necessariamente são os mesmos dos estudantes.   

### Descrição Geral da Proposta

Nossa proposta tem como objetivo proporcionar uma plataforma cujo ambiente permita que usuários publiquem ideias de projetos que desejem atuar e também que eles possam se conectar a outros projetos em andamento.  

Para assegurar que as experiências adquiridas nos projetos serão compatíveis com as buscadas pelo mercado de trabalho, nossa aplicação solicitará, através de um formulário, a indicação da vaga e seus pré-requisitos, aos quais deverão ser semelhantes ao que será desenvolvido no projeto proposto e esta conexão é o diferencial da nossa proposta, se comparado ao Linkedin e Github, que são plataformas onde é possível somente fazer publicações de links de projetos.  

Dessa forma, o projeto propõe que os usuários terão um estudo focado, aumentando suas chances de inserção no mercado de trabalho. Além disso, como os projetos serão desenvolvidos em grupos, os usuários terão a possibilidade de desenvolver competências comportamentais desejadas por empresas contratantes. 

### Processo Atual – Sistema que oferece cursos para capacitação de pessoas à vagas (DIO)

Nesse processo, o usuário realiza alguns cursos que compõem um bootcamp e ao final realiza um projeto para se candidatar a uma vaga na empresa que ofertou o bootcamp.
 
![Diagrama BPMN 1](img/BPMN-DIO.png)


### Processo Proposto 1 – Faça networking e realize projetos que estão na nossa plataforma (FIRSTEP)

Nesse processo, o usuário pode descrever um projeto e o mesmo fica aberto para que outras pessoas participem.
 
![Diagrama BPMN 1](img/BPMN-FIRSTEP1.png)


### Processo Proposto 2 – Faça networking e realize projetos que estão na nossa plataforma (FIRSTEP)

Nesse processo, o usuário pode descrever um projeto e o mesmo fica aberto para que outras pessoas participem. Cada equipe será limitada em um total de 6 integrantes.
 
![Diagrama BPMN 1](img/BPMN-FIRSTEP2.png)
 
 
## Indicadores de Desempenho

| # | Indicador |  Objetivos| Descrição |Cálculo | Fonte | Perspectiva |
|---|-|---------- |---------|-|--------|-------|
|001| Número de integrantes por grupo| Promover troca de conhecimeto entre os usuários|Contabilizar a média de pessoas por grupo| Média de pessoas por grupo| Banco de dados do projeto | Todos os grupos devem ter no mínimo 4 pessoas|
|002| Número de tutores cadastrados | Proporcionar fácil acesso a tutoria para todos os projetos  | Avaliar a quantidade de tutores disponiveis para atendimento  | Quantidade de tutores disponíves para atendimento | Banco de dados do projeto | Os tutores devem atender a no máximo 5 projetos simultaneamente |   
|003| Número de projetos finalizados por mês | Ter projetos prontos em diversas linguagens para atrair empresas e novos usuários | Contabilizar a quantidade de projetos que foram concluídos completamente  | Quantidade de projetos totalmente concluído  | Banco de dados do projeto  | Ter 10 projetos finalizados por mês |  
|004| Número de linguagens Cadastradas   | Atender o maior número de linguagens solicitadas pelo mercado | Avaliar a quantidade de linguagens que o aplicativo atende  | Quantidade de linguagens disponíveis | Banco de dados do projeto| Atender a mo mínimo 80% das linguagens usadas no mercado |  
|005| Número de downloads  | Aumentar a taxa de crescimento do aplicativo  | Avaliar a taxa de downloads realizados   | Média do número de downloads por mês  | Estátisticas fornecidas pela Playstore/AppleStore | Aumentar a taxa de crescimento do app 10% ao mês   |  
|006| Número de desinstalações do aplicativo | Diminuir o  número de desinstalações | Avaliar o que precisa ser mudado no Aplicativo para evitar futuras desinstalações | Média do número de desinstalações realizadas por mês  | Estátisticas fornecidas pela Playstore/AppleStore | Diminuir  o número de desinstalações em 20%.  |   
|007| Nota do Aplicativo  | Aumentar a nota de satisfação do usuário | Verificar a nota do App exibida aos usuários  | Calculada com base nas notas mais recente  | Estátisticas fornecidas pela Playstore/AppleStore | Aumentar a nota do Aplicativo para 5 estrelas.  |   
|008| Análise de Engajamento  | Aumentar a taxa de engajamento  | Gerar relatório de usuários ativos  | Número de  usuários ativos por dia e em 28 dias e recorrentes  | Estátisticas fornecidas pela Playstore/AppleStore | Aumentar o número de usuários ativos no App em 10%.  |
|009| Qualidade do aplicativo | Diminuir quantidade de falhas que o aplicativo apresentou | Medir os insights de qualidades | Quantidade de falhas que o aplicativo apresentou por mês | Estátisticas fornecidas pela Playstore/AppleStore | Corrigir e verificar as falhas ocorridas no aplicativo para menos de 3 por mês | 



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir cadastro de usuários. | ALTA | 
|RF-002| O aplicativo deve permitir login de usuários.  | ALTA |
|RF-003| O aplicativo deve permitir que o usuário se conecte a projeto já existente.     |   ALTA   |
|RF-004| O aplicativo deve ter no formulário de cadastro de projeto um campo que o usuário deva colocar a descrição da vaga de emprego.         |  ALTA   |
|RF-005| O aplicativo deve realizar uma busca por linguagem de programação. |  ALTA   |
|RF-006| O aplicativo deve ter uma página com amostras de projetos finalizados.|  ALTA   |
|RF-007| O aplicativo deve disponibilizar contato com tutores. | BAIXA  |
|RF-008| O aplicativo deve permitir que usuários publiquem ideias de projetos que desejem desenvolver. | ALTA     | 
|RF-009| O aplicativo deve disponibilizar informações com as regras do projeto que deverão ser seguidas.| MÉDIA    |    

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo em dispositivo móvel. | ALTA | 
|RNF-002| O aplicativo deverá ser elaborado no React Native.  |  ALTA | 
|RNF-003| O aplicativo deve ter bom nível de contraste entre os elementos da tela em conformidade. | BAIXA|
|RNF-004| O aplicativo deve ser compatível com as principais plataformas do mercado (IOS, Android).| ALTA|
|RNF-005| O sistema deverá garantir a segurança dos dados sensíveis do usuário por meio de criptografia.| ALTA |
|RNF-006| O sistema deverá estar disponível 24 horas por dia e 7 dias na semana. | ALTA |

### Priorização de Requisitos

A técnica para priorização de requisitos utilizada foi a Escala de Três Níveis e a imagem abaixo retrata a análise realizada.

<img src="img/PriorizacaoRequisitos1.png">


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| A equipe não pode subcontratar o desenvolvimento do trabalho.|   



## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama de Casos de uso](img/Diagrama_casos_de_uso.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/Matriz%20de%20rastreabilidade.jpg)



# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.


O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gestão de Tempo](img/gestao_tempo.png)
![Gráfico de Gantt](img/grafico_gantt.jpg)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/GerenciamentoDeEquipe.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/Gest%C3%A3o%20de%20Or%C3%A7amento.jpg)
