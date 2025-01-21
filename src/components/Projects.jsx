import { Menu } from './Menu';
import './Projects.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { ProjectDetails } from './ProjectDetails';

// Importa las imágenes directamente
import airTicket1 from '../assets/air-ticket1.png';
import airTicket2 from '../assets/air-ticket2.png';
import airTicket3 from '../assets/air-ticket3.png';
import shelfScape1 from '../assets/shelfScpe1.png';
import shelfScape2 from '../assets/shelfScape2.png';
import shelfScape3 from '../assets/shelfScape3.png';
import worldExplorer1 from '../assets/world-explorer1.png';
import worldExplorer2 from '../assets/world-explorer2.png';

export const Projects = () => {
    const [modalState, setModalState] = useState(false);

    const projects = [
        {
            id: 1,
            name: "Air Ticket",
            images: [
                { id: 1, image: airTicket1 },
                { id: 2, image: airTicket2 },
                { id: 3, image: airTicket3 },
            ],
            description: "Este proyecto consiste en una página web para la compra de tiquetes de avión. Ofrece opciones tanto de viaje sencillo (solo ida) como de viaje redondo (ida y regreso). Además, permite seleccionar el tipo de equipaje, lo que ajusta automáticamente la tarifa, y elegir el asiento según la disponibilidad.",
            tecnologies: "React, styled components, local storage",
            gitHub: "https://github.com/startcroft/Air-ticket/tree/main",
        },
        {
            id: 2,
            name: "ShelfScape",
            images: [
                { id: 1, image: shelfScape1 },
                { id: 2, image: shelfScape2 },
                { id: 3, image: shelfScape3 },
            ],
            description: "Este proyecto nació como una necesidad personal. Sin embargo, fue uno de los que más satisfacción me brindó durante su desarrollo, ya que fue el primer proyecto en el que implementé conocimientos de backend. Surgió a raíz de mi interés por diversos temas y la dificultad de mantener la información almacenada de forma ordenada y fácil de consultar.",
            tecnologies: "TypeScript, React, Sass, NodeJs, MongoDB, Mongoose, Vitest",
            gitHub: "https://github.com/startcroft/ShelfScape",
        },
        {
            id: 3,
            name: "World Explorer",
            images: [
                { id: 1, image: worldExplorer1 },
                { id: 2, image: worldExplorer2 },
            ],
            description: "Es una especie de diccionario de países que permite consultar datos básicos de cada nación, como los idiomas, la moneda y la bandera. La barra de búsqueda incluye un debounce para optimizar la experiencia del usuario. Además, muestra una imagen representativa de cada país obtenida de la API de imágenes de Unsplash.",
            tecnologies: "React",
            gitHub: "https://github.com/startcroft/World-explorer/tree/main",
        },
    ];

    const [projectSelected, setProjectSelected] = useState({});
    const changeModalState = () => {
        setModalState((prevState) => !prevState);
    };

    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    const updateSettings = () => {
        const width = window.innerWidth;
        if (width > 1000) {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
            });
        } else if (width > 500 && width < 1000) {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
            });
        } else {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }
    };

    const handleProject = (id) => {
        setProjectSelected(projects.find((project) => project.id === id));
        setModalState((prevState) => !prevState);
    };

    useEffect(() => {
        updateSettings();
        window.addEventListener('resize', updateSettings);

        return () => {
            window.removeEventListener('resize', updateSettings);
        };
    }, []);

    return (
        <>
            <div className="projects">
                <div className="projects__carrusel">
                    <Slider {...settings} className="Slider">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="projects__carrusel--card"
                                onClick={() => {
                                    handleProject(project.id);
                                }}
                            >
                                <div>
                                    <img
                                        src={project.images[0].image}
                                        alt="project"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__name">
                                    <p>{project.name}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {modalState && (
                    <div className="projectDetails__container" onClick={changeModalState}>
                        <div
                            className="projectDetails__modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ProjectDetails project={projectSelected} />
                        </div>
                    </div>
                )}

                <Menu className="Menu" />
            </div>
        </>
    );
};
