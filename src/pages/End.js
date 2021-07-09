import '../css/App.scss';
import '../css/End.scss';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function End() {

  const { search } = useLocation();
  const values = queryString.parse(search);

  return (
    <div className="App">
      <Header/>
      <div>
        <div className="body">
          <FontAwesomeIcon icon={faTrophy} className="icon" />
          <p>You're all done</p>
        </div>
        <div className="buttonWrapper">
          <Link className="btnLink --primary" to={`/present?theme=${values.theme}&slides=${values.slides}&timer=${values.timer}`}>Again</Link>
          <Link className="btnLink --secondary" to={"/setup"}>Different settings</Link>
        </div>
      </div>
    </div>
  );
}

export default End;