import "../css/FormControls.scss";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function SetupForm() {

  const [timeLimit, setTimeLimit] = useState("10");
  const [slides, setSlides] = useState("10");
  const [theme, setTheme] = useState("false");

  return (
    <div className="setupForm">
        <Slides value={slides} onChange={(e) => {setSlides(e.target.value)}}/>
        <TimeLimit value={timeLimit} onChange={(e) => {setTimeLimit(e.target.value)}}/>
        <Theme value={theme} onChange={(e) => {setTheme(e.target.value)}}/>

        <Link className="btnLink" to={
          theme ? `/theme?theme=&slides=${slides}&timer=${timeLimit}`
                : `/present?theme=&slides=${slides}&timer=${timeLimit}`
          }>
          PRESENT
          <FontAwesomeIcon icon={faChevronRight} className="icon" />
        </Link>
    </div>
  );
}

function TimeLimit(props) {
  return (
    <div className="inputContainer">
      <div className="inputLabel">
        <h3>Time limit</h3>
        <p>Set a time limit per slide, slides will change after this time</p>
      </div>
      <div className="radioContainer">
        <input type="radio" id="timelimit_10" name="timelimit" value="10" checked={props.value === "10"} onChange={props.onChange} />
        <label htmlFor="timelimit_10">10s</label>
        <input type="radio" id="timelimit_15" name="timelimit" value="15" checked={props.value === "15"} onChange={props.onChange} />
        <label htmlFor="timelimit_15">15s</label>
        <input type="radio" id="timelimit_30" name="timelimit" value="30" checked={props.value === "30"} onChange={props.onChange} />
        <label htmlFor="timelimit_30">30s</label>
        <input type="radio" id="timelimit_0" name="timelimit" value="0" checked={props.value === "0"} onChange={props.onChange} />
        <label htmlFor="timelimit_0">Unlimited</label>
      </div>
    </div>
  );
}

function Slides(props) {
  return (
    <div className="inputContainer">
      <div className="inputLabel">
        <h3>Slides</h3>
        <p>Select how many slides you want to be shown</p>
      </div>
      <div className="radioContainer">
        <input type="radio" id="5" name="slides" value="5" checked={props.value === "5"} onChange={props.onChange} />
        <label htmlFor="5">5</label>
        <input type="radio" id="10" name="slides" value="10" checked={props.value === "10"} onChange={props.onChange} />
        <label htmlFor="10">10</label>
        <input type="radio" id="15" name="slides" value="15" checked={props.value === "15"} onChange={props.onChange} />
        <label htmlFor="15">15</label>
      </div>
    </div>
  );
}

function Theme(props) {
  return (
    <div className="inputContainer">
      <div className="inputLabel">
        <h3>Topic</h3>
        <p>Would you like a randomly generated theme to talk about?</p>
      </div>
      <div className="radioContainer">
        <input type="radio" id="yes" name="theme" value="true" checked={props.value === "true"} onChange={props.onChange} />
        <label htmlFor="yes">Yes</label>
        <input type="radio" id="no" name="theme" value="false" checked={props.value === "false"} onChange={props.onChange} />
        <label htmlFor="no">No</label>
      </div>
    </div>
  );
}

export default SetupForm;
