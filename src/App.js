import Presentation from "./pages/Presentation";
import Setup from "./pages/Setup";
import End from "./pages/End";
import Theme from "./pages/Theme";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
          <Route path="/" component={Setup} exact />
          <Route path="/theme" component={Theme} />
          <Route path="/present" component={Presentation} />
          <Route path="/setup" component={Setup} />
          <Route path="/end" component={End} />
      </Switch>
    </main>
  );
}

export default App;
