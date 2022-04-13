
import "../style/style.scss"

const LoadMovies = ({ setPage }) => {
    return <div className="load-movies">

        <button className="btn" onClick={() => setPage(prev => prev + 1)}>loading...</button>

    </div>
}

export default LoadMovies;