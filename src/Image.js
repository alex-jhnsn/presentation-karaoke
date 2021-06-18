import "./css/Image.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function Image(props) {
    return (
        <div className="image">
            <img src={props.image.url} alt={props.image.description}/>
            <div className="attribution">
                <FontAwesomeIcon icon={faCamera} className="icon" />
                <a href={`https://unsplash.com/@${props.image.author.username}?utm_source=presentation-karaoke&utm_medium=referral`}>{props.image.author.name}</a> on <a href="https://unsplash.com/?utm_source=presentation-karaoke&utm_medium=referral">Unsplash</a>
            </div>
        </div>
    );
};

export default Image;