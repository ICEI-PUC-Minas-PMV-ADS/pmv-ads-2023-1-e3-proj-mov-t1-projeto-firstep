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
NomeProjeto char(30) NOT NULL,
DescricaoProjeto char (255) NOT NULL,
Tecnologias  char(255) NOT NULL, 
DescricaoVaga char(255) NOT NULL, 
Repositorio char(50) NOT NULL,
AutorProjeto char(30) NOT NULL,
QuantParticipante int NOT NULL,
Finalizado  boolean NOT NULL,
ParticipantesProjeto char(255) NOT NULL);

create table UsuarioProjeto (Id char(5) Primary Key, 
IdUsuario char (5), 
IdProjeto char (5), 
Constraint FK_UsuarioProjeto_Usuario foreign Key (IdUsuario) References Usuario(Id),
Constraint FK_UsuarioProjeto_Projeto foreign Key (IdProjeto) References Projeto(Id),
Constraint UQ_IdUsuario_IdProjeto UNIQUE (IdUsuario,IdProjeto));






