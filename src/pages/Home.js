import '../css/App.scss';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
        Home
        <Link to="/setup">Start</Link>
    </div>
  );
}

export default Home;
