import "./css/Controls.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Controls(props) {
    return (
        <div className="controls">
            <FontAwesomeIcon className="icon" icon={faCaretLeft} />
            <p>{props.currentSlide} / {props.totalSlides}</p>
            <FontAwesomeIcon className="icon" icon={faCaretRight} />
        </div>
    );
}

export default Controls;