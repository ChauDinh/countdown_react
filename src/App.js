import React from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Countdown from "./components/Countdown/Countdown";
import Logo from "./assets/images/tiki_logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="logo" width="150px" />
      </header>

      <main>
        <h1>The time you start working at Tiki</h1>
        <p>
          Everything that you love about coffee now you can find on your code!
        </p>
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
      </footer>
    </div>
  );
}

export default App;
