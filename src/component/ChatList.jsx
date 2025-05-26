import React from "react";
import ChatMessage from "./ChatMessage";
import { Box } from "@mui/material";
import { CHAT_FOOTER_HEIGHT } from "../pages/Chat/Chat";
import { HEADER_HEIGHT } from "../App";

const ChatList = ({ chats }) => {
	return (
		<Box
			sx={{
				position: "relative",
				height: `calc(100% - ${CHAT_FOOTER_HEIGHT})`,
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
		</Box>
	);
};

export default ChatList;
