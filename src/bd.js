import Usuario from './models/Usuario.js'
import Tarefa from './models/Tafera.js'

const bdUsuarios =[]
const bdTarefas =[]

const usuario = new Usuario ('Benício',157155166, 'benicio157@gmail.com')
bdUsuarios.push(usuario)

const usuario2 = new Usuario ('Bedibe', 12345, 'bedibe@gmail.com')
bdUsuarios.push(usuario2);

const tarefa = new Tarefa ('Modelar BD', 'Modelar BD Projeto A', 'A fazer', new Date())
bdTarefas.push(tarefa)

const tarefa2 = new Tarefa ('Criar BD', 'Criar BD Projeto B', 'A fazer', new Date())
bdTarefas.push(tarefa2)


export {bdUsuarios, bdTarefas}