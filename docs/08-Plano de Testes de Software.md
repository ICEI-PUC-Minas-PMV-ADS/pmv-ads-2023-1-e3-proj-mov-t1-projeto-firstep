# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

| **Caso de teste**   | **CT-01-Tela Login**|
|:---:	|:---:	|
|Requisito Associado |  RF-002 - O aplicativo deve permitir login de usuários. | 
| Objetivo do Teste 	| O usuário deverá realizar o login.|
| Passos 	| - Acessar o aplicativo <br> - Digitar email e senha <br> - Clicar no botão 'login' |  
|Critério de Êxito | - Verificar se o usuário conseguiu se conectar a sua conta  .|
|  |  |
| **Caso de teste**   | **CT-02-Tela Cadastro do Usuário**|
|:---:	|:---:	|
|Requisito Associado |  RF-001 - O aplicativo deve permitir cadastro de usuários. | 
| Objetivo do Teste 	| O usuário deverá realizar seu cadastro|
| Passos 	| - Acessar o aplicativo <br> - Digitar nome, e-mail, senha, descrição e link do github <br> - Clicar no botão 'Enviar cadastro' |  
|Critério de Êxito | - O cadastro do usuário deve ser realizado.|
|  |  |
| **Caso de teste**   | **CT-03-Tela Cadastro de Projeto**|
|	|	|
|Requisito Associado |  RF-008 - O aplicativo deve permitir que usuários publiquem ideias de projetos que desejem desenvolver. | 
| Objetivo do Teste 	| Verificar se o cadastro será realizado |
| Passos 	| - Acessar o aplicativo <br> - Fazer login <br> -Clicar no ícone 'Criar Projeto' <br> - Preencher o formulário  <br> - Clicar no botão 'Criar Projeto'|  
|Critério de Êxito | - Verificar se após preencher o formulário e clicar no botão 'Criar Projeto' o cadastro foi realizado.|
|  |  |
| **Caso de Teste**	| **CT-05 – Informações do Projeto**	|
|Requisito Associado | RF-003 - O aplicativo deve permitir que o usuário se conecte a projeto já existente.|
| Objetivo do Teste 	| Verificar se o sistema permite que o usuário se cadastre em projetos existentes. |
| Passos 	| - Acessar o aplicativo <br> - Clicar no projeto que deseja se cadastrar<br> - Clicar em "Cadastrar-se" <br> 
|Critério de Êxito | - Ao clicar em "Cadastrar-se" o usuário deve ser incluído como participante.  | 
|   |    | 
| **Caso de Teste**	| **CT-12 – Realização do Projeto**	|
|Requisito Associado | RF-007 - O aplicativo deve disponibilizar contato com tutores.|
| Objetivo do Teste 	| Verificar se o sistema permite que o usuário solicite um tutor. |
| Passos 	| - Acessar o aplicativo <br> - Clicar no projeto em que está cadastrado<br> - Clicar em "Solicitar tutor" <br> 
|Critério de Êxito | - Deve ser enviado uma mensagem a um tutor disponível.  | 
|   |    | 


 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
