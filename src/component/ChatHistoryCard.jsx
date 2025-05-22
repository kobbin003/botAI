import React from "react";
import ChatMessage from "./ChatMessage";

const ChatHistoryCard = ({ chat }) => {
	console.log("chat-history-chat: ", chat);
	const { id, chats, feedback } = chat;

	const firstChat = chats[0];
	const question = firstChat?.question;
	const response = firstChat?.response;
	return (
		<div>
			{firstChat && (
				<>
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
				</>
			)}
			<div>
				<b>Feedback:</b>
				<span>{feedback}</span>
			</div>
		</div>
	);
};

export default ChatHistoryCard;
