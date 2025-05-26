import { useEffect, useState } from "react";
import { getUserChats } from "../../utils/chats";
import ChatHistoryCard from "../../component/ChatHistoryCard";
import { HEADER_HEIGHT } from "../../App";
import { Box, Typography } from "@mui/material";
import { CHAT_FOOTER_HEIGHT } from "../Chat/Chat";

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
				// overflowY: "scroll",
				// backgroundColor: "teal",
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
					// backgroundColor: "blanchedalmond",
					// height: `calc(100% - ${CHAT_FOOTER_HEIGHT})`,
					// height: `calc(100vh - ${CHAT_FOOTER_HEIGHT} - ${HEADER_HEIGHT})`,
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
