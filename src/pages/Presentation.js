import '../css/App.scss';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Slides from '../components/Slides';
import Header from '../components/Header';

function Presentation() {

  const { search } = useLocation();
  const values = queryString.parse(search);

  return (
    <div className="App">
      <Header/>
      <div>
        
        <Slides slides={values.slides} timer={values.timer} />
      </div>
    </div>
  );
}

export default Presentation;
