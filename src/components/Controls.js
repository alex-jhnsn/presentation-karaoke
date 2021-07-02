import "../css/Controls.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Controls(props) {

    return (
        <div className="controls">
            <SlideTimer initialTime={props.initialTime} time={props.time} />
            <p>{props.currentSlide} / {props.totalSlides}</p>
            <button onClick={() => props.changeSlide(props.currentSlide+1)} disabled={props.currentSlide === props.totalSlides}>
                <FontAwesomeIcon className="icon" icon={faCaretRight} />
            </button>
        </div>
    );
}

function SlideTimer(props) {
    return (
        <Timer initialTime={props.initialTime} currentTime={props.time} size={30} strokeColour={"#cccccc"} strokeBackgroundColour={"#000000"} strokeWidth={3}/>
    )
}

function Timer(props) {
    const radius = props.size / 2;
    const circumference = props.size * Math.PI;

    let strokeDashOffset = circumference - (props.currentTime / props.initialTime) * circumference;

    return (
        <div className="timer" style={{height: props.size, width: props.size}}>
            <p>{props.currentTime}</p>
            <svg>
                <circle
                cx={radius}
                cy={radius}
                r={radius}
                fill="none"
                stroke={props.strokeBackgroundColour}
                strokeWidth={props.strokeWidth}
                ></circle>
            </svg>
            <svg>
                <circle
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashOffset}
                r={radius}
                cx={radius}
                cy={radius}
                fill="none"
                strokeLinecap="round"
                stroke={props.strokeColour}
                strokeWidth={props.strokeWidth}
                ></circle>
            </svg>
        </div>
    );

}

export default Controls;