import '../css/App.scss';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Theme() {

  const { search } = useLocation();
  const values = queryString.parse(search);

  const theme = "Test";

  return (
    <div className="App --centred">
      <div className="body --centred">
        <p>Your theme is</p>
        <p>{theme}</p>
        <Link className="btnLink" to={`/present?theme=${theme}&slides=${values.slides}&timer=${values.timer}`}>
          START
          <FontAwesomeIcon icon={faChevronRight} className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Theme;