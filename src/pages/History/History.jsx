import { useEffect, useState } from "react";
import { getUserChats } from "../../utils/chats";
import ChatHistoryCard from "../../component/ChatHistoryCard";

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
		<div>
			<h2>Conversation History</h2>
			{allChats.length > 0 &&
				allChats.map((chat) => <ChatHistoryCard chat={chat} />)}
		</div>
	);
};

export default History;
