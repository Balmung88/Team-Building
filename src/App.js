import './App.css';
import Header from "./components/Header.js";
import Greet from "./components/Greet.js";
import Person from "./components/Person.js";
import Banner from "./components/Banner.js";

function App(props) {
console.log(props);
	return (
	 	<div className="App">
			<header className="App-header">
				<Banner/>
				<Header/>
				<Greet />
				<Person />
			</header>
		</div>
	);
}


export default App;


