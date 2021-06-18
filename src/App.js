import Presentation from "./pages/Presentation";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <main>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/present" component={Presentation} />
          <Route path="/setup" component={Setup} />
      </Switch>
    </main>
  );
}

export default App;
