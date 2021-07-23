import '../css/App.scss';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Slides from '../components/Slides';

function Presentation(props) {

  const { search } = useLocation();
  const values = queryString.parse(search);

  return (
    <div className="App">
      <div>
        <Slides theme={values.theme} slides={values.slides} timer={values.timer} history={props.history}/>
      </div>
    </div>
  );
}

export default Presentation;
