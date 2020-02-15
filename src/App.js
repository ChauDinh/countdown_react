import React from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Countdown from "./components/Countdown/Countdown";
import Logo from "./assets/images/tiki_logo.png";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={Logo} alt="logo" />
        </header>

        <main>
          <h1>The time you start working at Tiki</h1>

          <Form />
          <Countdown />
        </main>

        <footer>
          <p>
            Created by{" "}
            <span>
              Chau Dinh{" "}
              <span aria-label="shit" role="img">
                💩
              </span>{" "}
              2020
            </span>
          </p>
          <a href="https://github.com/ChauDinh">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
