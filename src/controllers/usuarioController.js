
import { bdUsuarios } from "../bd.js"
import Usuario from "../models/Usuario.js";
class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/', usuarioController.listar)
        app.get('/email/:email',usuarioController.buscarPorEmail)
        app.post('/', usuarioController.inserir)
        app.delete('/email/:email',usuarioController.deletar)
        app.put('/email/:email', usuarioController.atualizarUsuario)
    }

    static listar(req, res){
        const usuario = bdUsuarios
        res.send(usuario)
    
    }

    static inserir(req, res){
       res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
      console.log (req.body)
    
 
    }

    static buscarPorEmail(req, res){
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)

        if (!usuario){
            req.status(404).send ('Usuário não encontrado')
        }
        res.send(usuario)
    }

    static deletar (req, res){
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)

        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }

        const index = bdUsuarios.indexOf(usuario)
        bdUsuarios.splice(index, 1)

        res.send(usuario)
    }
    
    static atualizarUsuario(req, res){

        const usuario = bdUsuarios.find (usuario => usuario.email === req.params.email)

        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        
        usuario.nome = (req.body.nome || usuario.nome)
        usuario.senha = (req.body.senha || usuario.senha)
        usuario.email = (req.body.email || usuario.email)

        res.send({mensagem: 'Usuário alterado com sucesso'})
    }
}

export default usuarioController