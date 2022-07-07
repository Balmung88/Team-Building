import './App.css';
import Header from "./components/Header.js";
import Greet from "./components/Greet.js";

function App(props) {
console.log(props);
	return (
	 	<div className="App">
			<header className="App-header">
				<Header/>
				<Greet />
			</header>
		</div>
	);
}


export default App;


