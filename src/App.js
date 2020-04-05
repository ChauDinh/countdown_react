import React from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Countdown from "./components/Countdown/Countdown";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<main>
					<h1>Countdown React.js</h1>

					<Form />
					<Countdown />
				</main>

				<footer>
					<p>
						Created by{" "}
						<span>
							Chau Dinh{" "}
							<span
								aria-label="shit"
								role="img"
							>
								❤️
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
