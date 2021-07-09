import '../css/App.scss';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

function End() {

  const { search } = useLocation();
  const values = queryString.parse(search);

  return (
    <div className="App">
      <Header/>
      <div>
        You're all done
        <Link to={`/present?theme=${values.theme}&slides=${values.slides}&timer=${values.timer}`}>Again</Link>
        <Link to={"/setup"}>Different settings</Link>
      </div>
    </div>
  );
}

export default End;