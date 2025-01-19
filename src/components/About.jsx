import { Menu } from './Menu'
import './About.scss'
export const About = () => {

    return (
        <>
            <div className='about'>
                <div className='presentation'>
                    
                    <iframe  className='presentation__video' width="400" height="225" src="https://www.youtube.com/embed/XFRduHvJtPY?si=CWrYUEAvWF_sENT5" title="Presentación"></iframe>

                    <div className='presentation__description'>
                        <p className='presentation__description--p'>
                            Soy un desarrollador web dedicado a la experimentación de espacios digitales que establezcan nuevas formas en las que los usuarios interactúan con la interfaz. Obtuve mi certificación en SENA (Servicio Nacional de Aprendizaje) y participe del Bootcamp de MAKAIA en el cuál tuve la oportunidad de realizar diferentes proyectos.
                        </p>
                        <div className='presentation__description--contact'>
                            <p>Contactame:</p>
                            <a href="https://www.linkedin.com/in/santiago-gomez-pavas" target="_blank" rel="noopener noreferrer">
                                <img className='linkedin' src="../src/assets/linkedin.png" alt="LinkedIn" />
                            </a>
                            <a href="https://wa.me/+573137242546" target="_blank" rel="noopener noreferrer">
                                <img className='whatsApp' src="../src/assets/whatsapp.png" alt="WhatsApp" />
                            </a>
                        </div>
                        <div className='presentation__description--email'>
                            <img src="../src/assets/email.png" alt="email" />
                            <p>santiagogomezpavas42@gmail.com</p>
                        </div>
                    </div>
                </div>
                <Menu className='Menu'/>
            </div>

        </>
    )
}