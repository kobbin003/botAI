import React from "react";
import ChatMessage from "./ChatMessage";
import { Box } from "@mui/material";

const ChatHistoryCard = ({ chat }) => {
	console.log("chat-history-chat: ", chat);
	const { id, chats, feedback } = chat;

	const firstChat = chats[0];
	const question = firstChat?.question;
	const response = firstChat?.response;
	return (
		<>
			{firstChat && (
				<Box sx={{ backgroundColor: "primary.main", borderRadius: "10px" }}>
					<ChatMessage
						key={`history-${id}-${question.content}`}
						question={question.content}
						time={question.createdAt}
					/>
					<ChatMessage
						key={`history-${id}-${response.content}`}
						response={response.content}
						time={response.createdAt}
					/>

					<Box
						sx={{
							width: "calc(100% - 30%)",
							// maxWidth: "600px",
							position: "relative",
							paddingX: "1rem",
							left: "calc(72px + 1rem)",
							paddingBottom: "1rem",
						}}
					>
						<b>Feedback:&nbsp;</b>
						<span>{feedback}</span>
					</Box>
				</Box>
			)}
		</>
	);
};

export default ChatHistoryCard;
