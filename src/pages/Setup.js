import '../css/App.scss';
import Header from '../components/Header';
import SetupForm from '../components/SetupForm';

function Setup() {
  return (
    <div className="App">
      <Header />
      <div>
        <SetupForm />
      </div>
    </div>
  );
}

export default Setup;