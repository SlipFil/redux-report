import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Redux from "./Components/redux/Redux";
import Mobx from "./Components/mobx/Mobx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content wrapper">
          <Route path="/redux" render={() => <Redux />} />
          <Route path="/mobx" render={() => <Mobx />} />

          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
