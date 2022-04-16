import { useEffect, useRef, useState } from "react"
import { useGetMovies } from "../../hook/MakeMovieList"
import BackImage from "../../global/BackImage"
import MovieCard from "../../global/MovieCard"
import { NOW_PLAYING } from "../../constant/API"
import "./index.scss"

const Header = () => {

    const nowPlayingMovies = useGetMovies(NOW_PLAYING)
    const carouselMovies = nowPlayingMovies.filter(movie => movie.backdrop_path && movie.vote_average > 7.5)
    const [currentImage, setCurrentImage] = useState(0)
    const refBack = useRef(null)
    const refText = useRef(null)

    useEffect(() => {
        let auto;
        function nextImage() {
            setCurrentImage(
                currentImage > carouselMovies.length - 2
                ? 0
                : currentImage + 1
            )
        }
        function autoChangeImage() {
            return auto = setInterval(nextImage, 5000)
        }
        autoChangeImage()
        return () => clearInterval(auto)
    }, [carouselMovies.length, currentImage])

    function handleChangeImage(e) {
        let newImagePosition;
        if (e.target.className === 'right') {
            currentImage > carouselMovies.length - 2
            ? newImagePosition = 0
            : newImagePosition = currentImage + 1;

        } else if (e.target.className === 'left') {
            currentImage < 1
            ? newImagePosition = carouselMovies.length - 1
            : newImagePosition = currentImage - 1
        }
        setCurrentImage(newImagePosition)
    }
    function handleClickDot(e) {
        let position = parseInt(e.target.getAttribute('id'))
        for (let i=0; i<carouselMovies.length; i++) {
            if (position === i) {
                setCurrentImage(i)
            }
        }
    }

    if (!carouselMovies) {
            setTimeout(async ()=> {
                console.log('aaa');
            }, 3000)
        return <div>loading...</div>
    }

    return <header>
            <div className="carousel-wrapper">
                <div className="carousel-images">
                    <div className="carousel-text" ref={refText}>
                        {
                            carouselMovies.map((movie, index) => {
                                return <>
                                    <MovieCard
                                        {...movie}
                                        className={ currentImage === index ? 'active': null}
                                    />
                                </>
                            })
                        }
                    </div>
                    <div className="carousel-picture" ref={refBack}>
                        {
                            carouselMovies.map((movie, index) => {
                                return <>
                                    <BackImage
                                        key={movie.id}
                                        backDrop={movie.backdrop_path}
                                        className={ currentImage === index ? 'active': undefined}
                                    />
                                </>
                            })
                        }
                    </div>
                </div>

                <div className="black"></div>
                <div className="left" onClick={handleChangeImage}>&lt;</div>
                <div className="right" onClick={handleChangeImage}>&gt;</div>
            </div>

            <div className="scroll-icon"></div>

            <ul className="dot-group">
                    {
                        carouselMovies.map((movie , index) => {
                            return <li
                                onClick={handleClickDot}
                                id ={index}
                                className="dot"
                                style={
                                    currentImage === index
                                    ? {backgroundColor: '#777'}
                                    : undefined
                                    }
                            ></li>
                        })
                    }
            </ul>
    </header>
}

export default Header;