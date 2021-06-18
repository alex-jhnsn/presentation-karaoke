import '../css/App.scss';
import Slides from '../components/Slides';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Presentation() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Alex's Presentation Karaoke</h1>
        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
      </header>
      <div>
        <Slides/>
      </div>
    </div>
  );
}

export default Presentation;
