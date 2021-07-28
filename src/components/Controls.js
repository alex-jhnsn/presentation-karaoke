import "../css/Controls.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faImages } from '@fortawesome/free-solid-svg-icons';

function Controls(props) {

    return (
        <div className="footerWrapper">
            <div className="footer">
                <div className="controls">
                    <SlideTimer initialTime={props.initialTime} time={props.time} />
                    <div className="slides">
                        <FontAwesomeIcon className="icon" icon={faImages} />
                        <p>{props.currentSlide}|{props.totalSlides}</p>
                    </div>
                    <button onClick={() => props.changeSlide(props.currentSlide+1)} disabled={props.currentSlide === props.totalSlides}>
                        <FontAwesomeIcon className="icon" icon={faCaretRight} />
                    </button>
                </div>
                <div className="title">AJ'S SLIDES</div>
            </div>
        </div>
    );
}

function SlideTimer(props) {
    return (
        <Timer initialTime={props.initialTime} currentTime={props.time} size={40} strokeColour={"#FFF9F5"} strokeBackgroundColour={"#000000"} strokeWidth={5}/>
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