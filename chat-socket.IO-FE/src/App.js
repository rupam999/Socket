import './App.css';
// import MainForm from './components/MainForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import { useEffect } from 'react';

function App() {
	return (
		<div
			className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center"
			style={{ height: '100vh' }}
		>
			<Router>
				<Routes>
					<Route index element={<p>This is a page</p>} />
					<Route path="chat/:roomId" element={<ChatRoom />} />
					<Route path="*" element={<h1>No match</h1>} />
				</Routes>
			</Router>

			<ChatRoom />
		</div>
	);
}

export default App;
