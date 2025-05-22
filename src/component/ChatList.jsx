import React from "react";
import ChatMessage from "./ChatMessage";

const ChatList = ({ chats }) => {
	console.log("chats: ", chats);
	return (
		<div>
			{chats.length &&
				chats.map(({ question, response }) => (
					<div>
						<ChatMessage
							question={question.content}
							time={question.createdAt}
						/>

						{response?.content && (
							<ChatMessage
								response={response?.content}
								time={response?.createdAt}
							/>
						)}
					</div>
				))}
		</div>
	);
};

export default ChatList;
