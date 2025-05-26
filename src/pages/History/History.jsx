import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { HEADER_HEIGHT } from "../../App";
import ChatHistoryCard from "../../component/ChatHistoryCard";
import { getUserChats } from "../../utils/chats";

const History = () => {
	const [allChats, setAllChats] = useState([]);

	useEffect(() => {
		// populate chats from localstorage
		const storedChat = getUserChats();
		if (storedChat) {
			setAllChats(storedChat);
		}
	}, []);
	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: `calc(100vh - ${HEADER_HEIGHT})`,
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography variant="h2" sx={{ textAlign: "center" }}>
				Conversation History
			</Typography>
			<Box
				sx={{
					position: "relative",
					overflowY: "scroll",
					padding: "3rem 1rem",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				{allChats.length > 0 &&
					allChats.map((chat) => <ChatHistoryCard chat={chat} />)}
			</Box>
		</Box>
	);
};

export default History;
