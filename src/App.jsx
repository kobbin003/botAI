import { Route, Routes } from "react-router";
import "./App.css";
import Chat from "./pages/Chat/Chat";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";
import SideBar from "./component/SideBar";
import { useState } from "react";
import Modal from "./component/Modal";

function App() {
	// const toggleDrawer = () => setToggleDrawer((prev) => !prev);
	const [mainPosition, setMainPosition] = useState(250);
	return (
		<>
			<div style={{ display: "flex", height: "2.5rem" }}>
				<SideBar
					mainPosition={mainPosition}
					setMainPosition={setMainPosition}
				/>
				<header
					style={{
						position: `${mainPosition == 0 ? "relative" : "absolute"}`,
						left: `${mainPosition}px`,
						backgroundColor: "crimson",
						// height: "6rem",
					}}
				>
					<h1>Bot AI</h1>
				</header>
			</div>
			<main style={{ left: `${mainPosition}px` }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chat/:id" element={<Chat />} />
					<Route path="/history" element={<History />} />
				</Routes>
			</main>
			{/* <Modal showModal={false} /> */}
		</>
	);
}

export default App;
