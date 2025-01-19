import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types';
import './Carousel.scss'

export const Carousel = ({ images }) => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1
            })
        } else {
            const isLastSlide = currentIndex === images.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1)
            }
        }
    }
    const goToSlide = (SlideIndex) => {
        setCurrentIndex(SlideIndex);
    }

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li > img')[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [currentIndex])
    return (
        <div className="main-container">
            <div className="slider-container">
                <div className="leftArrow" onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className="rightArrow" onClick={() => scrollToImage('next')}>&#10093;</div>
                <div className="container-images">
                    <ul ref={listRef}>
                        {
                            images.map((item) => {
                                return <li key={item.id}>
                                    <img src={item.image} alt="project" width={480} height={260} />
                                </li>
                            })
                        }
                    </ul>

                </div>
                <div className="dots-container">
                    {
                        images.map((_, idx) => (
                            <div key={idx} className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                            onClick = {() => goToSlide(idx)}>
                                &#9865;
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};