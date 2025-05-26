import React from "react";
import ChatMessage from "./ChatMessage";
import { Box } from "@mui/material";
import { CHAT_FOOTER_HEIGHT } from "../pages/Chat/Chat";
import { HEADER_HEIGHT } from "../App";

const ChatList = ({ chats }) => {
	// console.log("chats: ", chats);
	return (
		<Box
			sx={{
				position: "relative",
				// backgroundColor: "blanchedalmond",
				height: `calc(100% - ${CHAT_FOOTER_HEIGHT})`,
				// height: `calc(100vh - ${CHAT_FOOTER_HEIGHT} - ${HEADER_HEIGHT})`,
				overflowY: "scroll",
				padding: "3rem 1rem",
			}}
		>
			{chats.length &&
				chats.map(({ question, response }) => (
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							// gap: "1rem",
						}}
					>
						{/* question */}
						<ChatMessage
							question={question.content}
							time={question.createdAt}
						/>
						{/* response */}
						<ChatMessage
							response={response?.content}
							time={response?.createdAt}
						/>
					</Box>
				))}
			{/* {responseIsLoading && <p>Loading...</p>} */}
		</Box>
	);
};

export default ChatList;
