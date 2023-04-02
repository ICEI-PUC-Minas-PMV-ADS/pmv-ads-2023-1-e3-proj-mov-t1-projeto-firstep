-- Criação de Banco de Dados Firstep -- 
CREATE DATABASE Firstep;
USE Firstep;

-- Criando as Tabelas do Banco de Dados--


create table Usuario (Id char(5) Primary Key,
Nome char(30) NOT NULL, 
Email char(20) NOT NULL, 
Senha char (20) NOT NULL, 
DescricaoPerfil char(255) NOT NULL, 
Github char(255)NOT NULL);

create table Projeto  (Id char(5) Primary Key, 
IdUsuario char (5), 
NomeProjeto char(30) NOT NULL,
DescricaoProjeto char (255) NOT NULL,
Tecnologias  char(255) NOT NULL, 
DescricaoVaga char(255) NOT NULL, 
Repositorio char(50) NOT NULL,
AutorProjeto char(30) NOT NULL,
QuantParticipante int NOT NULL,
Constraint FK_Projeto_Usuario foreign Key (IdUsuario) References Usuario(Id));

select * from Usuario;
select * from projeto;

iNSERT INTO Usuario values ('001', 'Hannah Montana', 'hannah@montana.com','12345','Estou estudando back-end e gostaria de participar de projetos para desenvolver essa habilidade','github.com/hannah');

iNSERT INTO Projeto values ('001', '001', 'Agricont', 'O projeto consiste em uma página web para gestão patrimonial de agricultores.','HTML, CSS, BootStrap
.NET C#
SQLServer',' Dev fullstack jr
Empresa: Juninhos
Salário: À combinar',' github.com/AgriCont', 'junior123@gmail.com',3);





