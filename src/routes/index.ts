import {Router} from 'express'
import {Request, Response} from 'express'
import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.send("TESTE!!")
})

router.get('/usuarios',usuarioController.index)
//criando o controller para visualizar a página de cadastro
router.get('/cadastro',usuarioController.visualizaPaginaCadastro)
//criando o controller para receber os dados
router.post('/cadastro',usuarioController.cadastroUsuario)

router.get('/editar/:id',usuarioController.editaUsuario)

router.post('/editar/:id',usuarioController.atualizaUsuario)

router.get('/excluir/:id',usuarioController.deletaUsuario)

export default router

