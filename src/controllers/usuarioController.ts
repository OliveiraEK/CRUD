import {Request, Response} from 'express'
import {Usuario} from '../models/Usuario'


export const index = async (req:Request, res:Response) =>{

    let users = await Usuario.findAll()
    

    res.render("pages/usuario",{
        users
    })
}
//CONTROLLER PARA VISUALIZAR OS DADOS
export const visualizaPaginaCadastro = async (req:Request,res:Response) =>{

    res.render("pages/cadastrar")
}
//CONTROLLER PARA RECEBER OS  DADOS
export const cadastroUsuario = async(req:Request, res: Response) =>{
    const {nome,email} = req.body
    
    if(nome && email){
        await Usuario.create({
            nome,
            email
        })
    }
    res.redirect("/usuarios")
} 

export const editaUsuario = async(req:Request, res:Response) =>{

    const {id} = req.params

    const user = await Usuario.findByPk(id)

    res.render('pages/editar',{
        user,
        id
    })
}

export const atualizaUsuario = async(req:Request, res:Response) =>{
    const {id} = req.params
    const {nome, email} = req.body

    await Usuario.update({
        nome,
        email
    },{
        where:{
            id:id
        }
    })

    res.redirect('/usuarios')
}

export const deletaUsuario = async(req:Request, res:Response) => {
    const {id} = req.params

    await Usuario.destroy({
        where:{
            id:id
        }
    })

    res.redirect('/usuarios')
}