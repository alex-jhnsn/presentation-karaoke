import '../css/App.scss';
import '../css/End.scss';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function End() {

  const { search } = useLocation();
  const values = queryString.parse(search);

  return (
    <div className="App --centred">
      <div className="body --centred">
        <p>GREAT SUCCESS!</p>
        <FontAwesomeIcon icon={faThumbsUp} className="icon" />
        <div className="buttonWrapper">
          <Link className="btnLink --primary" to={`/present?theme=${values.theme}&slides=${values.slides}&timer=${values.timer}`}>Again</Link>
          <Link className="btnLink --secondary" to={"/setup"}>Different settings</Link>
        </div>
      </div>
    </div>
  );
}

export default End;