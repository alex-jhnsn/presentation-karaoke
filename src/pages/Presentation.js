import '../css/App.scss';
import Slides from '../components/Slides';
import Header from '../components/Header';

function Presentation() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Slides/>
      </div>
    </div>
  );
}

export default Presentation;
