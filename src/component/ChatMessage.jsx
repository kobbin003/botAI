import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router";

// user
//* either question is falsy or response is. Both cannot be same at the same time
const ChatMessage = ({ question, response, time }) => {
	// console.log("time;...................", time);
	const timeObject = new Date(time);
	const location = useLocation();
	console.log("location: ", location);

	const isHistoryRoute = location.pathname.includes("history");

	const localeDay = timeObject.toLocaleDateString();
	const isToday = new Date().toLocaleDateString() == localeDay;
	const localeTime = timeObject
		.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		})
		.toUpperCase();
	const formattedTime = `${isToday ? "Today" : localeDay}, ${localeTime}`;
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "flex-start",
				backgroundColor: isHistoryRoute
					? "primary.main"
					: "secondary.darkerLight",
				boxShadow: isHistoryRoute ? "" : "0 1px 5px rgba(0, 0, 0, 0.1)",
				gap: "1rem",
				padding: "1rem",
				borderRadius: "20px",
				marginBottom: "1rem",
			}}
		>
			<Avatar
				alt={question ? "you" : "soul AI"}
				src={question ? "/user-avatar.svg" : "/soulAI-avatar.svg"}
				sx={{ width: 72, height: 72 }}
			/>
			<Box
				sx={{
					height: "fit-content",
					display: "flex",
					gap: "0.4rem",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
					{question ? <span>You</span> : <span>Soul AI</span>}
				</Typography>
				<Typography>
					{question ? question : response ? response : "Loading..."}
				</Typography>
				<Typography>
					{question ? formattedTime : response ? formattedTime : null}
				</Typography>
			</Box>
		</Box>
	);
};

export default ChatMessage;
