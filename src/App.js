import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Components/Header";
import Home from './Components/Home';
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
	return (
		<>
			<Header />
			<Switch>
			<Route exact path="/" component={Home} />
			<Redirect to="/" />
		</Switch>
		</>
	);
}

export default App;
