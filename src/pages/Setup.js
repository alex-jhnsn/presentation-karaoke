import '../css/App.scss';
import Slides from '../components/Slides';
import Header from '../components/Header';

function Setup() {
  return (
    <div className="App">
      <Header />
      <div>
        <Slides/>
      </div>
    </div>
  );
}

export default Setup;