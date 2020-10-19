import React, { FormEvent } from 'react'
import './style.css'
import api from '../../services/api'


import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import Input from '../../components/input';



function pageInit() {
    

    //const [email, setEmail] = React.useState('');
   // const [senha, setSenha] = React.useState('');
   // const [box, setBox] =React.useState('');

    async function handleGetUser(e: FormEvent){
        e.preventDefault()

        await api.get('users',{
            params:{
                
            }
        })
    }

    return (
        <div id="pageInit">
        <div className="row">
                    <div className="col-6 pt1 flex-row align-items-center justify-content-center" >
                        
                        <div className="proffi">
                            <img src={logoImg} alt="" />
                            <p>Sua plataforma de <br />
                            estudos online.</p>
                        </div>
                    </div>
                    <div className="col-6 pt2 flex-row align-items-center justify-content-center">
                        <form className="login" onSubmit={handleGetUser}>
                            <fieldset>
                            <legend>Fazer login</legend>
                            <hr/>
                            <Input 
                                name='email' 
                                label='E-mail'                                
                            />

                            
                            
                            <Input 
                                name='email' 
                                label='E-mail'                                 
                                
                            />

                            <div className ='checkbox'> 
                            <Input 
                                name='email' 
                                label='E-mail'
                            
                            /> Lembre-me &nbsp; &nbsp;<a className="mr-auto pl-5" href="">Esqueci minha senha</a></div>
                            
                            <button className="enviar" type="submit">Entrar</button>

                            <div className="cadastro">
                                <h4>Não tem conta? </h4>
                                <h4 className="ml-auto">É de graça <img src={purpleHeartIcon} alt=""/></h4>
                                
                            </div><a href="">cadastre-se</a>
                            
                            </fieldset>
                            
                        </form>
                    </div>
                </div>
        </div>
    )
}
export default pageInit