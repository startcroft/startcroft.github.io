import './Home.scss';
import { Menu } from './Menu';

// Importa las imágenes directamente
import me from '../assets/me.jpg';
import marco1 from '../assets/marco1.png';
import marco2 from '../assets/marco2.png';

export const Home = () => {
    return (
        <div className="Home">
            <main className='Home__main'>
                <section className='Home__main--section'>
                    <figure className="Home__profile">
                        <img src={me} alt="Santiago Gómez" className="Home__profile--img" />
                        <img src={marco1} alt="" className='Home__profile--frame' />
                    </figure>
                    <div className='Home__name'>
                        <p>Santiago Gómez Pavas</p>
                    </div>

                    <div className='Home__container'>
                        <p className='Home__container--p'>
                            Bienvenid@ seas a este humilde rincón digital, morada de mis sueños y empeños.
                            Soy, pues, un desarrollador frontend, cual hidalgo errante, dedicado a forjar
                            espacios digitales que desafíen las fronteras de lo común y revistan la web de
                            nuevas maravillas. Mi anhelo es revolucionar la manera en que las almas navegan
                            este vasto océano de información. <br />
                            Te invito, noble visitante, a recorrer mi obra y conocer más de este ingenioso
                            oficio al que entrego mi pasión. ¡Que tu estancia sea amena!
                        </p>
                    </div>
                    <img className='Home__frame' src={marco2} alt="frame" />
                </section>

                <Menu className='Menu' />
            </main>
        </div>
    );
};
