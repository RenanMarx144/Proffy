import React from 'react'
import whatsaappIcon from '../../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
    <header>
        <img src="https://avatars3.githubusercontent.com/u/49290733?s=460&u=faa8f4499a2285a4e35f91b722cd0160561018be&v=4" alt="" />
        <div>
            <strong>Renan</strong>
            <span>Quimica</span>
        </div>
    </header>
    <p>
        asd asd asd asd adasdasd asd asd asd asd qwe sdf kjhbadfbqwejbi iufbqweifb
        <br /> iwpeiufubsdfujbkwjebfb ubbwefjbuiujbasdfubi ub iubub
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>R$ 20,00</strong>
        </p>
        <button type="button">
            <img src={whatsaappIcon} alt="wh"/>
            Entrar em contato
        </button>
    </footer>
</article>
    )
    
}
export  default TeacherItem