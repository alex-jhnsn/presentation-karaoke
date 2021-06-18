import "../css/Controls.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Controls(props) {

    return (
        <div className="controls">
            <button onClick={() => props.changeSlide(props.currentSlide-1)} disabled={props.currentSlide === 1} >
                <FontAwesomeIcon className="icon" icon={faCaretLeft} />
            </button>
            <p>{props.currentSlide} / {props.totalSlides}</p>
            <button onClick={() => props.changeSlide(props.currentSlide+1)} disabled={props.currentSlide === props.totalSlides}>
                <FontAwesomeIcon className="icon" icon={faCaretRight} />
            </button>
        </div>
    );
}

export default Controls;