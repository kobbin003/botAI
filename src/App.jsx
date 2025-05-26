import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import SideBar from "./component/SideBar";
import Chat from "./pages/Chat/Chat";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";

export const HEADER_HEIGHT = "2.5rem";

function App() {
	const [mainPosition, setMainPosition] = useState(250);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					height: `${HEADER_HEIGHT}`,
					backgroundColor: "secondary.light",
				}}
			>
				<SideBar
					mainPosition={mainPosition}
					setMainPosition={setMainPosition}
				/>
				<header
					style={{
						position: `${mainPosition == 0 ? "relative" : "absolute"}`,
						paddingLeft: `${mainPosition}px`,
						width: `calc(100vw - ${mainPosition}px)`,
					}}
				>
					<Typography variant="h1" color="primary" sx={{ paddingLeft: "1rem" }}>
						Bot AI
					</Typography>
				</header>
			</Box>
			<Box
				component={"main"}
				sx={{
					position: "relative",
					left: `${mainPosition}px`,
					width: `calc(100vw - ${mainPosition}px)`,
					backgroundColor: "secondary.light",
					height: `calc(100vh - ${HEADER_HEIGHT})`,
				}}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chat/:id" element={<Chat />} />
					<Route path="/history" element={<History />} />
				</Routes>
			</Box>
		</>
	);
}

export default App;
