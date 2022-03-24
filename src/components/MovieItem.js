const MovieItem = ({ src, date, title, overview }) => {
    return (
        <>
            <li className="movieItem">
                <img src={src} alt="" />
                <p>{date}</p>
                <p>{title}</p>
                <p>{overview}</p>
            </li>
        </>
    );
}

export default MovieItem;