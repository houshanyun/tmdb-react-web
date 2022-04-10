const Title = ({ home, hotMovies, nowPlaying, upComing }) => {
    return <div className="title">
        <h2>
            { home }
            {hotMovies}
            {nowPlaying}
            {upComing}
        </h2>
    </div>
}

export default Title;