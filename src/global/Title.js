
const Title = ({ webName, home, hotMovies, nowPlaying, upComing }) => {
    function handleReload() {
        //window.history.go(-1)
        window.location.href = 'http://localhost:3000/';
        //<Link to='/'/>
    }
    return <div className="title">
        {
        webName
        ? <h1 className="web-name" onClick={handleReload}>TWMD</h1>
        : <h2>
            { home }
            {hotMovies}
            {nowPlaying}
            {upComing}
        </h2>
        }
    </div>
}

export default Title;