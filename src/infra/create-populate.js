import db from "./db.js";

//== Usuários

const USUARIOS_SCHEMA =`
CREATE TABLE IF NOT EXISTS "USUARIOS"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64)
);`;

const ADD_USUARIOS_DATA =`
INSERT INTO USUAROS (ID, NOME, SENHA, EMAIL) VALUES
(1, 'Benício','********', 'benicio157@gmail.com')
(2, 'Bedibe', '*********', 'bedibe@gmail.com')
`

function criaTabelaUsr(){
    db.run(USUARIOS_SCHEMA, (error)=>{
        if(error) console.log("Erro ao criar tabela de usuários")
    });
}

function populaTabelaUsr(){
    db.run(ADD_USUARIOS_DATA, (error)=>{
        if (error) console.log("Erro ao popular tabela usuários")
    });
}

//=== Tarefas

const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS TAREFAS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    TITULO VARCHAR(64),
    DESCRICAO TEXT,
    STATUS VARCHAR(32),
    DATACRIACAO VARCHAR(32)
    ID_USUARIO INTEGER,
    FOREIGN KEY (ID_USUARIO) REFERENCES USUARIOS(ID)
);`;

const ADD_TAREFAS_DATA = `INSERT INTO TAREFAS (TITULO, DESCRICAO,STATUS, DATACRIACAO, ID_USUARIO)
VALUES
('Futebol', 'Jogar futebol segunda e quarta', 'Continuo', '2022-01-21, 2),
('Treinar', 'Ir para academia', 'TODO', '2023-01-22, 1'),
`

function criarTabelaTarefas(){
    db.run(TAREFAS_SCHEMA, (error)=>{
        if(error) console.log("Erro ao criar tabela de Tarefas");
    });
}

function populaTabelaTarefas(){
    db.run(ADD_USUARIOS_DATA, (error)=>{
        if(error) console.log("Erro ao popular tabela de Tarefas");
    });
}

db.serialize(()=>{
    criaTabelaUsr();
    populaTabelaUsr();
    criarTabelaTarefas();
    populaTabelaTarefas();
});                                         



    