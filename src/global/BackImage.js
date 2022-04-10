import { IMAGE_BASE_URL } from "../constant/API"

const BackImage = ({ backDrop, poster, className}) => {
    return <>
        <picture className={className}>
            {backDrop && <img src={`${IMAGE_BASE_URL}original${backDrop}`} alt="" />}
            {poster && <img src={`${IMAGE_BASE_URL}w300${poster}`} alt="" />}
        </picture>
    </>
}

export default BackImage;