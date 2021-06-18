import "../css/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header">
      <h1>Alex's Presentation Karaoke</h1>
      <FontAwesomeIcon icon={faInfoCircle} className="icon" />
    </header>
  )
}

export default Header;