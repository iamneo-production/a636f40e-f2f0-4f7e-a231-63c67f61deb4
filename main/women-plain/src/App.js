import { Route, Routes, Navigate } from "react-router-dom";
import Main from './components/Main'
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Home/home";

function App() {

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/home" exact element={<Login />} />
			{/* */}
		</Routes>
	);
}

export default App;

